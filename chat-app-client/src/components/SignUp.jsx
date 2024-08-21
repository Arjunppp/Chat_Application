import React from "react";

export const SignUp = () => {
  return (
    <div className="h-screen bg-slate-100 flex items-center justify-center">
      <form className="flex flex-col border border-orange-400 p-4 ">
        <div className="name_col flex ">
          <div className="first_name flex">
            <label htmlFor="first_name">first name</label>
            <input type="text" name="first_name" id="first_name" />
          </div>
          <div className="first_name">
            <label htmlFor="last_name">last name</label>
            <input type="text" name="last_name" id="last_name" />
          </div>
        </div>
        <div className="email_col">
          <label htmlFor="email">email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="username_col">
          <label htmlFor="username">username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="password_col">
          <label htmlFor="password">password</label>
          <input type="text" name="password" id="password" />
        </div>
        <div className="cnfrm_password_col">
          <label htmlFor="cnfrm_password">confirm password</label>
          <input type="text" name="cnfrm_password" id="cnfrm_password" />
        </div>
      </form>
    </div>
  );
};
