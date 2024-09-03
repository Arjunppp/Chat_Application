import { db } from "./models/db.js";
import { loginModel } from "./models/Schema.js";


async function main()
{
   const user =  await  db.select().from(loginModel);
   console.log(user);
   
}

main()