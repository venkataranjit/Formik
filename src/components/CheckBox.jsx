import React from "react";
import { ErrorMessage, Field } from "formik";
import { Alert } from "react-bootstrap";

const CheckBox = ({ label, name, options, ...rest }) => {
  return (
    <div className="mb-3">
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
      )}
      <br />
      <Field name={name} id={name} {...rest}>
        {({ field, form }) => {
          const { value } = field;
          const { setFieldValue } = form;

          return options.map((option, index) => (
            <div className="form-check form-check-inline" key={index}>
              <input
                type="checkbox"
                id={option.value}
                className="form-check-input"
                value={option.value}
                checked={value.includes(option.value)}
                onChange={() => {
                  if (Array.isArray(value) && value.includes(option.value)) {
                    // Remove value if already selected
                    setFieldValue(
                      name,
                      value.filter((val) => val !== option.value)
                    );
                  } else {
                    // Add value if not selected
                    setFieldValue(name, [...(value || []), option.value]);
                  }
                }}
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

export default CheckBox;
