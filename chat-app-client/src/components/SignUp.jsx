import React, { useState, useEffect } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { isAboveAge } from "../utils/getAgeUtil";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  const navigate = useNavigate();
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
    date_of_birth: false,
  });
  const [isChanged, setChanged] = useState({
    email: false,
    password: false,
    cnfrm_password: false,
    date_of_birth: false,
  });
  const [isEMpty, setEmpty] = useState(false);

  const [isSubmit, setSubmit] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    for (const key in formState) {
      if (formState[key] === "") {
        setEmpty(true);
        break;
      }
    }

    if (
      (isEMpty,
      !isValid.email,
      !isValid.password,
      isValid.date_of_birth,
      isValid.cnfrm_password)
    ) {
      setSubmit(true);
    }
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

      if (formState.password === formState.cnfrm_password) {
        setValid((prevState) => ({
          ...prevState,
          cnfrm_password: true, // Matches password
        }));
      } else {
        setValid((prevState) => ({
          ...prevState,
          cnfrm_password: false, // Does not match password
        }));
      }
    }
    if (formState.date_of_birth) {
      setChanged((prevState) => ({ ...prevState, date_of_birth: true }));
      setValid((prevState) => ({
        ...prevState,
        date_of_birth: isAboveAge(formState.date_of_birth),
      }));
    }
    if (isSubmit) {
      console.log(formState);

      const postFormData = async () => {
        try {
          const response = await axios.post(
            "http://localhost:5000/signup",
            formState
          );

          if (response.status === 201) {
            navigate('/login');
          }
        } catch (error) {
          console.error("Error submitting form: ", error);
        }
      };

      postFormData();
    }
  }, [formState, isSubmit]);

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
            {...(isEMpty && formState.firstName == ""
              ? { isEmpty: "First Name is required" }
              : {})}
          />
          <Input
            id="LastName"
            type="text"
            name="Last Name"
            handleChange={handleChange}
            {...(isEMpty && formState.LastName == ""
              ? { isEmpty: "Last Name is required" }
              : {})}
          />
        </div>
        <Input
          id="email"
          type="email"
          name="Email"
          handleChange={handleChange}
          {...(isEMpty && formState.email == ""
            ? { isEmpty: "email is required" }
            : {})}
          {...(isChanged.email ? { isEmailValid: isValid.email } : {})}
        />
        <Input
          id="date_of_birth"
          type="date"
          name="Date Of Birth"
          handleChange={handleChange}
          {...(isEMpty && formState.date_of_birth == ""
            ? { isEmpty: "Dob is required" }
            : {})}
          {...(isChanged.date_of_birth
            ? { isValidAge: !isValid.date_of_birth }
            : {})}
        />
        <Input
          id="username"
          type="text"
          name="Username"
          {...(isEMpty && formState.username == ""
            ? { isEmpty: "Username is required" }
            : {})}
          handleChange={handleChange}
        />
        <Input
          id="password"
          type="password"
          name="Password"
          handleChange={handleChange}
          {...(isEMpty && formState.password == ""
            ? { isEmpty: "Password is required" }
            : {})}
          {...(isChanged.password ? { isPasswordValid: isValid.password } : {})}
          isChanged={isChanged.password}
        />

        <Input
          id="cnfrm_password"
          type="password"
          name="Confirm Password"
          handleChange={handleChange}
          {...(isEMpty && formState.cnfrm_password == ""
            ? { isEmpty: "Re-enter Password" }
            : {})}
          {...(isChanged.cnfrm_password
            ? { isCnfrmPasswd: !isValid.cnfrm_password }
            : {})}
        />

        <div className="flex justify-center">
          <Button
            type="submit"
            display={isSubmit ? "Registering..." : "Submit"}
            className="text-white mt-4 w-2/4  bg-orange-600 hover:bg-orange-700 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-orange-600 dark:hover:bg-orange-600 focus:outline-none dark:focus:ring-orange-600"
          />
        </div>
      </form>
    </div>
  );
};

//if all these conditions are matched ----register the user in the backend
//if regsitration is sucessfulll  --- navigate to
