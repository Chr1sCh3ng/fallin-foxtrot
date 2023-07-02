import React from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "./formStyle.css";

const RegisterPage = () => {
  const userData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    isLoggedIn: false,
  };

  const onHandleRegister = (values) => {
    console.log("userData", values);
    Swal.fire("Success!", "Login successfully!", "success");
  };

  const registerSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Not valid email.").required("Required"),
    password: Yup.string().required("Required"),
    passwordConfirm: Yup.string().required("Required"),
  });

  return (
    <Formik
      enableReinitialize={true}
      initialValues={userData}
      validationSchema={registerSchema}
      onSubmit={onHandleRegister}
    >
      <div className="register-image">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <h1 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-light">
                Register
              </h1>
              <Form id="form" className="px-md-2">
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="firstName" />
                  <input
                    type="text"
                    className="form-control input-field"
                    name="firstName"
                    placeholder="Enter First Name"
                    autoComplete="username"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="has-error"
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="lastName" />
                  <input
                    type="text"
                    className="form-control input-field"
                    name="lastName"
                    placeholder="Enter Last Name"
                    autoComplete="username"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="has-error"
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="email" />
                  <Field
                    type="text"
                    className="form-control input-field "
                    name="email"
                    placeholder="Enter Email"
                    autoComplete="username"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="has-error"
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
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="password" />
                  <Field
                    type="password"
                    className="form-control input-field"
                    name="passwordConfirm"
                    placeholder="Re-enter Password"
                    autoComplete="current-password"
                  />
                  <ErrorMessage
                    name="passwordConfirm"
                    component="div"
                    className="has-error"
                  />
                </div>
                <button type="submit" className="btn btn-success btn-lg mb-1">
                  Register
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
};

export default RegisterPage;
