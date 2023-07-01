import React from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";

const Login = () => {
  const loginData = {
    email: "",
    password: "",
  };

  const onLoginClicked = (values) => {
    console.log(values);
    swal("Congrats!", "Login Success", "success");
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Not valid email.").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <Formik
      enableReinitialize={true}
      initialValues={loginData}
      validationSchema={loginSchema}
      onSubmit={onLoginClicked}
    >
      <Form>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img
                  src="../../images/julien-di-majo-cwL_DmFQTMI-unsplash.jpg"
                  alt="happy people in office having a good time"
                />
                <div className="card-body p-4 p-md-5">
                  <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                    <strong>Login Info</strong>
                  </h2>
                  <Form id="form" method="post" className="px-md-2">
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="email" />
                      Email
                      <Field
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Enter Email"
                        autoComplete="username"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-warning"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="password" />
                      Password
                      <Field
                        type="text"
                        className="form-control"
                        name="password"
                        placeholder="Enter Password"
                        autoComplete="current-password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-warning"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg mb-1"
                    >
                      Login
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Login;
