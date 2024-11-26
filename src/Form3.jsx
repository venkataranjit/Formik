import { Formik, Form, Field } from "formik";
import { Alert, Button } from "react-bootstrap";
import * as Yup from "yup";

const initialValues = {
  userName: "",
  email: "",
  description: "",
};

const Form3 = () => {
  const validationSchema = Yup.object({
    userName: Yup.string().required("enter any name"),
    email: Yup.string().email("Invalid Format").required("Email required"),
    description: Yup.string().required("Enter any Description"),
  });
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm();
  };
  return (
    <>
      <h4>Yup Validation for Formik Component</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          // console.log(formikProps);
          const { errors, touched } = formikProps;
          return (
            <Form>
              <Field
                name="userName"
                className="form-control mb-3"
                placeholder="User Name"
              />
              {touched.userName && errors.userName && (
                <Alert variant="danger">{errors.userName}</Alert>
              )}
              <Field
                name="email"
                className="form-control mb-3"
                placeholder="Email"
              />
              {touched.email && errors.email && (
                <Alert variant="danger">{errors.email}</Alert>
              )}
              <Field
                name="description"
                className="form-control mb-3"
                placeholder="Description"
                as="textarea"
              />
              {touched.description && errors.description && (
                <Alert variant="danger">{errors.description}</Alert>
              )}
              <Button type="submit">Sumbit</Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Form3;
