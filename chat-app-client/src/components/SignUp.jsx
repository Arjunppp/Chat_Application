import React, { useState, useEffect } from "react";
import { Input } from "./input";
import { Button } from "./button";

export const SignUp = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    LastName: "",
    email: "",
    date_of_birth: "",
    username: "",
    password: "",
    cnfrm_password: "",
  });
  const [isValid, setValid] = useState({
    email: false,
    password: false,
    cnfrm_password: false,
  });
  const [isChanged, setChanged] = useState({
    email: false,
    password: false,
    cnfrm_password: false,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[a-zA-Z\d@#$%^&+=!]{6,}$/;
  useEffect(() => {
    if (formState.email) {
      setChanged((prevState) => ({ ...prevState, email: true }));
      emailRegex.test(formState.email)
        ? setValid((prevState) => ({
            ...prevState,
            email: false,
          }))
        : setValid((prevState) => ({
            ...prevState,
            email: true,
          }));
    }
    if (formState.password) {
      setChanged((prevState) => ({ ...prevState, password: true }));
      passwordRegex.test(formState.password)
        ? setValid((prevState) => ({
            ...prevState,
            password: false,
          }))
        : setValid((prevState) => ({
            ...prevState,
            password: true,
          }));
    }
    if (formState.cnfrm_password) {
      setChanged((prevState) => ({ ...prevState, cnfrm_password: true }));

      formState.password === formState.cnfrm_password
        ? setValid((prevState) => ({
            ...prevState,
            cnfrm_password: true,
          }))
        : setValid((prevState) => ({
            ...prevState,
            cnfrm_password: false,
          }));
    }
  }, [formState]);
  console.log(formState);

  return (
    <div className=" flex items-center justify-center py-16">
      <form
        onSubmit={handleSubmit}
        className="flex  gap-3 flex-col border-2 border-orange-300 rounded-lg px-5 py-2.5 focus-within:border-orange-300 focus-within:ring-2 focus-within:ring-orange-300 dark:focus-within:ring-orange-300"
      >
        <div className="flex gap-3">
          <Input
            id="firstName"
            type="text"
            name="First Name"
            handleChange={handleChange}
          />
          <Input
            id="LastName"
            type="text"
            name="Last Name"
            handleChange={handleChange}
          />
        </div>
        <Input
          id="email"
          type="email"
          name="Email"
          handleChange={handleChange}
          {...(isChanged.email ? { isEmailValid: isValid.email } : {})}
        />
        <Input
          id="date_of_birth"
          type="date"
          name="Date Of Birth"
          handleChange={handleChange}
        />
        <Input
          id="username"
          type="text"
          name="Username"
          handleChange={handleChange}
        />
        <Input
          id="password"
          type="password"
          name="Password"
          handleChange={handleChange}
          {...(isChanged.password ? { isPasswordValid: isValid.password } : {})}
        />
        <Input
          id="cnfrm_password"
          type="password"
          name="Confirm Password"
          handleChange={handleChange}
          {...(isChanged.cnfrm_password ? { isCnfrmPasswd: isValid.cnfrm_password } : {})}
        />

        <div className="flex justify-center">
          <Button
            type="submit"
            display="submit"
            className="text-white mt-4 w-2/4  bg-orange-600 hover:bg-orange-700 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-orange-600 dark:hover:bg-orange-600 focus:outline-none dark:focus:ring-orange-600"
          />
        </div>
      </form>
    </div>
  );
};
