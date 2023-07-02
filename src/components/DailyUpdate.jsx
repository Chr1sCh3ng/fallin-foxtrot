import React from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "./user/formStyle.css";

const DailyUpdate = () => {
  const userData = {
    affirmation: "",
  };

  const onHandleSubmit = (values) => {
    console.log("userData", values);
    Swal("Success!", "Submission Successful!", "success");
  };

  const registerSchema = Yup.object().shape({
    notes: Yup.string().required("Required"),
  });

  return (
    <Formik
      enableReinitialize={true}
      initialValues={userData}
      validationSchema={registerSchema}
      onSubmit={onHandleSubmit}
    >
      <div className="daily-image">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <h1 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-light">
                Daily Update
              </h1>
              <Form id="form" className="px-md-2">
                <div className="form-outline mb-4">
                  <label className="form-label text-light">
                    On a scale of 1 to 5, how do you feel today?
                  </label>
                  <div className="form-check form-check-inline">
                    <Field
                      type="radio"
                      className="form-check-input"
                      name="feeling"
                      value="1"
                    />
                    <label className="form-check-label" htmlFor="feeling-1">
                      1
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Field
                      type="radio"
                      className="form-check-input"
                      name="feeling"
                      value="2"
                    />
                    <label className="form-check-label" htmlFor="feeling-2">
                      2
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Field
                      type="radio"
                      className="form-check-input"
                      name="feeling"
                      value="3"
                    />
                    <label className="form-check-label" htmlFor="feeling-3">
                      3
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Field
                      type="radio"
                      className="form-check-input"
                      name="feeling"
                      value="4"
                    />
                    <label className="form-check-label" htmlFor="feeling-4">
                      4
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Field
                      type="radio"
                      className="form-check-input"
                      name="feeling"
                      value="5"
                    />
                    <label className="form-check-label" htmlFor="feeling-5">
                      5
                    </label>
                  </div>
                  <ErrorMessage
                    name="feeling"
                    component="div"
                    className="has-error"
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label text-light" htmlFor="notes">
                    Daily Affirmation
                  </label>
                  <Field
                    component="textarea"
                    className="form-control input-field"
                    name="affirmation"
                    placeholder="What are you going to accomplish today? Anything bothering you at the moment? Anything new going on in your life?"
                    maxLength={2000}
                  />
                  <ErrorMessage
                    name="affirmation"
                    component="div"
                    className="has-error"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-lg mb-1">
                  Submit
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
};

export default DailyUpdate;
