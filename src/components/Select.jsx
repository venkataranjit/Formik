import { ErrorMessage, Field } from "formik";
import { Alert } from "react-bootstrap";

const Select = ({ label, name, options, ...rest }) => {
  return (
    <div className="mb-3">
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        as="select"
        className="form-select"
        name={name}
        id={name}
        {...rest}
      >
        <option value="">Select Any One</option>
        {options.map((item, index) => (
          <option value={item.value} key={index}>
            {item.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name}>
        {(error) => <Alert variant="danger">{error}</Alert>}
      </ErrorMessage>
    </div>
  );
};

export default Select;
