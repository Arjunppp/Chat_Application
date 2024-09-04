import { userSignUp } from "../services/homeServices.js";

export const handleUserSignUp = async (req, res) => {

    try {
        const formData = req.body;
        await userSignUp(formData);
        res.status(201).json({
            message: 'User successfully signed up!',
            status: 'success'
        });

    } catch (error) {
        console.error(error);

    }


};