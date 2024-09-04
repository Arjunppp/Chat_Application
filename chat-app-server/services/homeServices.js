import { db } from "../models/db.js";
import { loginModel } from "../models/Schema.js";


// async function main()
// {
//    const user =  await  db.select().from(loginModel);
//    console.log(user);

// }

// main()


export const userSignUp = async (data) => {
   try {
      console.log(data);
      
      await db.insert(loginModel).values({
         firstName : data.firstName,
         lastName: data.LastName,
         dateOfBirth: data.date_of_birth,
         email: data.email,
         username: data.username,
         password: data.password
       });
       
   } catch (error) {
      throw error

   }



}



