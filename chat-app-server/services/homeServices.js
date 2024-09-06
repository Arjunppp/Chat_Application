import { db } from "../models/db.js";
import { SignUp } from "../models/Schema.js";
import {  hashedPassword } from "../utils/bcryptUtil.js"; 


// async function main()
// {
//    const user =  await  db.select().from(loginModel);
//    console.log(user);

// }

// main()


export const userSignUp = async (data) => {
   try {
      
      const hashedPass = await hashedPassword(data.password);
      
      await db.insert(SignUp).values({
         firstName : data.firstName,
         lastName: data.LastName,
         dateOfBirth: data.date_of_birth,
         email: data.email,
         username: data.username,
         password: hashedPass
       });
       
   } catch (error) {
      throw error

   }



}



