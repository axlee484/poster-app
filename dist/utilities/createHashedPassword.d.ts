declare const createHashedPassword: (plainText: string) => {
    salt: string;
    hashedPassword: string;
};
export default createHashedPassword;
