import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Error from "./Error";

const initialValues = {
  userName: "",
  email: "",
  description: "",
};

const Form2 = () => {
  const [val, setVal] = useState({});
  const validate = (values) => {
    console.log(values);
    const errors = {};
    if (!values.userName) {
      errors.userName = "Enter Any Name";
    } else if (values.userName.length <= 3) {
      errors.userName = "value must be greatherthan 3 characters";
    }
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(values.email)) {
      errors.email = "Email is not a valid format";
    }
    if (values.description.length <= 10) {
      errors.description = "Must be greatherthan 10 characters";
    }
    return errors;
  };
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setVal(values);
    resetForm();
  };
  return (
    <>
      <h4>Formik Components</h4>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            name="userName"
            className="form-control mb-3"
            placeholder="User Name"
          />
          <ErrorMessage name="userName" component={Error} />
          <Field
            name="email"
            className="form-control mb-3"
            placeholder="Email"
          />
          <ErrorMessage name="email" component={Error} />
          <Field
            name="description"
            className="form-control mb-3"
            placeholder="Description"
            as="textarea"
          />
          <ErrorMessage name="description" component={Error} />
          <Button type="submit">Sumbit</Button>
        </Form>
      </Formik>
      {val.email}
      {val.description}
      {val.userName}
    </>
  );
};

export default Form2;
