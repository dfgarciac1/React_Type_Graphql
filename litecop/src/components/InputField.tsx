import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import { HtmlAttributes } from "csstype";
import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";

type InputFieldProps= InputHTMLAttributes<HTMLInputElement> &{
    name:string;
    label:string;
};

export const InputField: React.FC<InputFieldProps>=({label,size: _,...props})=>{
const [field,{error ,}] =useField(props);
return(
    <FormControl isInvalid={!!error} className="Cuerpo1">
        <label htmlFor={field.name} >{label}</label>
        <input{...field} {...props} id={field.name} ></input>
        {error? <FormErrorMessage>{error}</FormErrorMessage>: null}
        </FormControl>
        )


}