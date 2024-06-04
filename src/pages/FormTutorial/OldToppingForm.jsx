import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {
  name: "",
  price: "",
};

const onSubmit = (values) => {
  console.log("Form data: ", values);
};

const validate = (values) => {
  // errors.name, errors.price
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.price) {
    errors.price = "Required";
  } else if (!/^[0-9]+$/i.test(values.price)) {
    errors.price = "Invalid price format";
  }

  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  price: Yup.string()
    .matches(/^[0-9]+$/, "Invalid price format")
    .required("Required"),
});

const OldToppingForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log("On focus field: ", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        <br />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          name="price"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div>{formik.errors.price}</div>
        ) : null}
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default OldToppingForm;
