import React from "react";
import { useField } from "formik";

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className={meta.error ? "form-control is-invalid" : "form-control"}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </div>
  );
};

export { InputField };
