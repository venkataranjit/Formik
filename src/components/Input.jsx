import { ErrorMessage, Field } from "formik";
import { Alert } from "react-bootstrap";

const Input = ({ label, name, ...rest }) => {
  return (
    <div className="mb-3">
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        className="form-control"
        type="text"
        name={name}
        id={name}
        {...rest}
      />
      <ErrorMessage name={name}>
        {(error) => <Alert variant="danger">{error}</Alert>}
      </ErrorMessage>
    </div>
  );
};

export default Input;
