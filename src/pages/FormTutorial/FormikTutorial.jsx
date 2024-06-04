import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import React from "react";
import * as Yup from "yup";
import TextError from "../../components/TextError/TextError";

const initialValues = {
  name: "",
  price: "",
  comment: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values) => {
  console.log("Form data: ", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  price: Yup.string()
    .matches(/^[0-9]+$/, "Invalid price format")
    .required("Required"),
});

const validateComment = (value) => {
  let error;

  if (!value) {
    error = "Required";
  }

  return error;
};

const FormikTutorial = () => {
  return (
    <div className="templatemo-content-widget no-padding">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="text-uppercase">Topping Form</h2>
        </div>
        <div className="panel-body">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnChange={false}
            enableReinitialize
          >
            {(formik) => (
              <Form className="templatemo-login-form">
                <div
                  className={`form-group ${
                    formik.errors.name ? "has-error" : ""
                  }`}
                >
                  <label htmlFor="name" className="control-label">
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <ErrorMessage name="name" component={TextError} />
                </div>
                <div
                  className={`form-group ${
                    formik.errors.price ? "has-error" : ""
                  }`}
                >
                  <label htmlFor="price" className="control-label">
                    Price
                  </label>
                  <Field
                    type="text"
                    id="price"
                    name="price"
                    className="form-control"
                  />
                  <ErrorMessage name="price" component={TextError} />
                </div>
                <div
                  className={`form-group ${
                    formik.errors.comment ? "has-error" : ""
                  }`}
                >
                  <label htmlFor="comment" className="control-label">
                    Comment
                  </label>
                  <Field
                    as="textarea"
                    id="comment"
                    name="comment"
                    className="form-control"
                    validate={validateComment}
                  />
                  <ErrorMessage name="comment" component={TextError} />
                </div>

                <div className="form-group">
                  <label htmlFor="facebook">Facebook</label>
                  <Field
                    type="text"
                    id="facebook"
                    name="social.facebook"
                    className="form-control"
                  />
                  <ErrorMessage name="social.facebook" component={TextError} />
                </div>

                <div className="form-group">
                  <label htmlFor="twitter">Twitter</label>
                  <Field
                    type="text"
                    id="twitter"
                    name="social.twitter"
                    className="form-control"
                  />
                  <ErrorMessage name="social.twitter" component={TextError} />
                </div>

                <div className="form-group">
                  <label htmlFor="primaryPhoneNumber">
                    Primary Phone Number
                  </label>
                  <Field
                    type="text"
                    id="primaryPhoneNumber"
                    name="phoneNumbers[0]"
                    className="form-control"
                  />
                  <ErrorMessage name="phoneNumbers[0]" component={TextError} />
                </div>
                <div className="form-group">
                  <label htmlFor="secondaryPhoneNumber">
                    Secondary Phone Number
                  </label>
                  <Field
                    type="text"
                    id="secondaryPhoneNumber"
                    name="phoneNumbers[1]"
                    className="form-control"
                  />
                  <ErrorMessage name="phoneNumbers[1]" component={TextError} />
                </div>

                <div className="form-group">
                  <label htmlFor="phNumbers">List Of Phone Numbers</label>
                  <FieldArray name="phNumbers">
                    {(fieldArrayProps) => {
                      console.log("Field Array Props: ", fieldArrayProps);
                      const { push, remove, form } = fieldArrayProps;

                      const { values } = form;
                      const { phNumbers } = values;

                      return (
                        <div>
                          {phNumbers.map((phNumber, index) => (
                            <div key={index} className="margin-bottom-10">
                              <Field
                                name={`phNumbers[${index}]`}
                                className="form-control margin-bottom-10"
                              />
                              <button
                                type="button"
                                className="templatemo-edit-btn margin-right-15"
                                onClick={() => push("")}
                              >
                                Add
                              </button>
                              {index > 0 && (
                                <button
                                  type="button"
                                  className="templatemo-edit-btn"
                                  onClick={() => remove(index)}
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      );
                    }}
                  </FieldArray>
                </div>

                <div className="form-group">
                  <button type="submit" className="templatemo-blue-button">
                    Save
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default FormikTutorial;
