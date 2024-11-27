import React from "react";
import { ErrorMessage, Field } from "formik";
import { Alert } from "react-bootstrap";

const Radio = ({ label, name, options, ...rest }) => {
  return (
    <div className="mb-3">
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
      )}
      <br />
      <Field name={name} id={name} {...rest}>
        {(fieldProps) => {
          const { field } = fieldProps;
          return options.map((option, index) => (
            <div className="form-check form-check-inline" key={index}>
              <input
                type="radio"
                {...field}
                id={option.value}
                className="form-check-input"
                value={option.value}
                checked={field.value === option.value}
              />
              <label className="form-check-label" htmlFor={option.value}>
                {option.key}
              </label>
            </div>
          ));
        }}
      </Field>
      <ErrorMessage name={name}>
        {(error) => <Alert variant="danger">{error}</Alert>}
      </ErrorMessage>
    </div>
  );
};

export default Radio;
