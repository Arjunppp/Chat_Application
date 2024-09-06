import bcrypt from 'bcrypt';

export const hashedPassword = async (password) => 
{
    const hashedPassword = await(  bcrypt.hash(password ,10));
    return hashedPassword;
};

export const comparePassword = async(password , hashedPass) => 
{
    const isMatch = await bcrypt.compare(password ,hashedPass);
    return isMatch;
}