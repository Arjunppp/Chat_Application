import React from "react";
import {
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";

export const Input = (props) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={props.id}>{props.name}</label>
      <input
        onChange={props.handleChange}
        type={props.type}
        name={props.id}
        className={`p-2 focus:ring-2 border ${props.isEmailValid || props.isPasswordValid ?   ' border-red-500 focus:ring-red-500' :' border-orange-300 focus:ring-orange-300'} font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-orange-600 dark:hover:bg-orange-600 focus:outline-none dark:focus:ring-orange-600`}
      />
      {props.isEmailValid && <p className="text-red-500 text-xs">Invalid format (eg:abc@email.xyz)</p>}
      {props.isPasswordValid && <p className="text-red-500 text-xs">Min. 6 charecters , include capital and small letters and special charecters(@ ,/,| etc)</p>}
      
      {props.isCnfrmPasswd && <p className="text-red-500 text-xs">Password Mismatch</p>}
    </div>
  );
};
