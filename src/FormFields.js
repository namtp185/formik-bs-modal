import React, { Component, useEffect, useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { InputField } from "./Fields";

const FormFields = (props) => {
  const bagRef = useRef();
  console.log(props.initialValues);

  return (
    <Formik
      innerRef={bagRef}
      initialValues={{
        title: props.initialValues ? props.initialValues.Title : ""
      }}
      validationSchema={Yup.object({
        title: Yup.string().required("Required")
      })}
      onSubmit={(values, { setSubmitting }) => {
        const payload = {
          ...values
        };

        props.doSubmit(payload);
      }}
    >
      <Form id="foo">
        <InputField
          label="Title"
          name="title"
          type="text"
          placeholder="This is the title"
        />
      </Form>
    </Formik>
  );
};

export default FormFields;
