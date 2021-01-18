import React from "react";
import { Field, Form, Formik } from "formik";
import { InputField } from "../components/InputField";
import { Box, Button } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { useMutation } from "urql";
const macbookIphone = require("../pages/alberto.png");
import Head from 'next/head'
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
interface registerProps {}
{/* <div>
<img src={macbookIphone} className="Alberto" />
</div> */}

export const Register: React.FC<registerProps> = ({}) => {
  const [,   register] = useRegisterMutation();
  return (
    
    <div className="box">
  <Head>
      <title>Register</title>
      <link rel="shortcut icon" href= {macbookIphone} />
      <meta name="viewport" content="initial-scale=3.0, width=device-width" />
    </Head>
      <Formik
        initialValues={{ username: " ", password: " " }}
        onSubmit={async(values,{ setErrors }) => {
          const response =await register(values);
          if (response.data?.register.errors) {
            console.log (response.data?.register.errors)
            setErrors(toErrorMap(response.data?.register.errors));
             }
             
        }}
      >
        {({}) => (
          <Form>
       
            <div className="Cuerpo1">
              <a className="Pata" href="#">
                <span>Registrate con Facebook</span>
              </a>
            </div>
            <div className="Cuerpo1">
              <a className="Pata2" href="#">
                <span>Registrate con Google</span>
              </a>
            </div>

            <div>
              <span className="Divisor">o </span>
            </div>

            <div className="Cuerpo1">
              <InputField
                className="Tform"
                name="username"
              placeholder="username"
              label="Username"
              />
            </div>
            <div className="Cuerpo1">
              <InputField
                className="Tform"
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </div>
            <div className="Cuerpo1">
              <p >
                <a id= "reset-password"className="olvida">¿Olvidaste tu contraseña?</a>
              </p>
            </div>
            <div className="Cuerpo1">
              <button className="btn-primary" type="submit">
                register
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Register;
