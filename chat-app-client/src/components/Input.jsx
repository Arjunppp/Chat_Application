import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export const Input = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-3 relative">
      <label htmlFor={props.id}>{props.name}</label>
      <div className="relative w-full">
        <input
          onChange={props.handleChange}
          type={showPassword && props.type === "password" ? "text" : props.type}
          name={props.id}
          className={`p-2 focus:ring-2 border ${
            props.isEmailValid || props.isPasswordValid
              ? " border-red-500 focus:ring-red-500"
              : " border-orange-300 focus:ring-orange-300"
          } font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-orange-600 dark:hover:bg-orange-600 focus:outline-none dark:focus:ring-orange-600 w-full`}
        />
        {props.isChanged && props.type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-500" />
            )}
          </button>
        )}
      </div>
      {props.isEmailValid && (
        <p className="text-red-500 text-xs">
          Invalid format (e.g., abc@email.xyz)
        </p>
      )}
      {props.isEmpty && (
        <p className="text-red-500 text-xs">
          {props.isEmpty}
        </p>
      )}
      {props.isValidAge && (
        <p className="text-red-500 text-xs">User must be above 18 years</p>
      )}
      {props.isPasswordValid && (
        <p className="text-red-500 text-xs">
          Min. 6 characters, include uppercase, lowercase, and special
          characters (@, /, |, etc.)
        </p>
      )}
      {props.isCnfrmPasswd && (
        <p className="text-red-500 text-xs">Password Mismatch</p>
      )}
    </div>
  );
};
