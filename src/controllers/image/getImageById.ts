import { Response } from "express";
import path from "path";
import fs from "fs";
import { AuthorisedRequest } from "../../middleware/authorizeByRole.js";
import prisma from "../../utilities/prismaClient.js";
import env from "../../utilities/envConfig.js";

const getImage = async (req: AuthorisedRequest, res: Response) => {
  try {
    const { user } = req;
    if (!user) return res.status(403).json({ message: "Unauthorized" });
    const { id: _id } = req.params;
    const id = parseInt(_id);

    const image = await prisma.image.findUnique({
      where: {
        id: id,
        userId: user.id,
      },
    });

    if (!image) return res.status(404).json({ message: "Image not found" });
    const imagePath = path.join(env.STORAGE, image.fileName);
    console.log(imagePath);

    if (!fs.existsSync(imagePath)) {
      return res.status(404).json({ message: "Image not found" });
    }
    fs.readFile(imagePath, (error, data) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
      }

      // Set the appropriate content type for the response based on the image MIME type
      res.setHeader("Content-Type", image.contentType);
      return res.send(data);
    });

    if (!user) return res.status(403).json({ message: "Unauhtorized" });
    return;
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
export default getImage;
