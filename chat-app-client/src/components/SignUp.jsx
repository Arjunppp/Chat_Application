import React from "react";
import { Input } from "./input";
import { Button } from "./button";

export const SignUp = () => {
  return (
    <div className=" flex items-center justify-center py-16">
      <form className="flex  gap-3 flex-col border-2 border-orange-300 rounded-lg px-5 py-2.5 focus-within:border-orange-300 focus-within:ring-2 focus-within:ring-orange-300 dark:focus-within:ring-orange-300">
        <div className="flex gap-3">
          <Input id="firstName" type="text" name="First Name" />
          <Input id="LastName" type="text" name="Last Name" />
        </div>
        <Input id="email" type="email" name="Email" />
        <Input id="date_of_birth" type="date" name="Date Of Birth" />
        <Input id="username" type="text" name="Username" />
        <Input id="password" type="password" name="Password" />
        <Input id="cnfrm_password" type="password" name="Confirm Password" />
        
        <div className="flex justify-center">
        <Button type='submit' display='submit' className='text-white mt-4 w-2/4  bg-orange-600 hover:bg-orange-700 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-orange-600 dark:hover:bg-orange-600 focus:outline-none dark:focus:ring-orange-600'/>
        </div>
      </form>
    </div>
  );
};
