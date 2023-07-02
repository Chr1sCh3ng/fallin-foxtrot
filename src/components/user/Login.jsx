import React from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "./formStyle.css";

const LoginPage = () => {
  const userData = {
    email: "",
    password: "",
  };

  const onHandleLogin = (values) => {
    console.log("userData", values);
    Swal.fire("Success!", "Login successfully!", "success");
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Not valid email.").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <Formik
      enableReinitialize={true}
      initialValues={userData}
      validationSchema={loginSchema}
      onSubmit={onHandleLogin}
    >
      <div className="login-image">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <h1 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-light">
                Login
              </h1>
              <Form id="form" className="px-md-2">
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="email" />
                  <Field
                    type="text"
                    className="form-control input-field"
                    name="email"
                    placeholder="Enter Email"
                    autoComplete="username"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="password" />
                  <Field
                    type="password"
                    className="form-control input-field"
                    name="password"
                    placeholder="Enter Password"
                    autoComplete="current-password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="has-error"
                  />
                </div>
                <button type="submit" className="btn btn-success btn-lg mb-1">
                  Login
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
};

export default LoginPage;
