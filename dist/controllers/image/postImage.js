import prisma from "../../utilities/prismaClient.js";
const selectFieldsImage = {
    id: true,
    userId: true,
    size: true,
    fileName: true,
};
const postImage = async (req, res) => {
    try {
        const { file, user } = req;
        console.log(file, user);
        if (!file || !user)
            return res.status(200).json({ message: "no file uploaded" });
        const image = await prisma.image.create({
            data: {
                fileName: file.originalname,
                contentType: file.mimetype,
                path: file.path,
                userId: user?.id,
                size: file.size,
            },
            select: selectFieldsImage,
        });
        return res.status(200).json({
            data: image,
            message: "uploaded",
        });
    }
    catch (err) {
        return res.status(500).json({ message: err });
    }
};
export default postImage;
//# sourceMappingURL=postImage.js.map