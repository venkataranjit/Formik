import { Alert, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const initialValues = {
  userName: "",
  userDescription: "",
  userType: "",
  range: "",
  date: "",
};

function Form4() {
  const [values, setValues] = useState({});
  const validationSchema = Yup.object({
    userName: Yup.string()
      .required("Enter Any Name")
      .min(3, "Min 3 Characters")
      .max(10, "Max 10 Characters"),
    userDescription: Yup.string().required("Description Required"),
    userType: Yup.string().required("select any one"),
    date: Yup.string().required("select any Date"),
  });
  const onSubmit = (values) => {
    console.log("submit" + JSON.stringify(values, null, 1));
    setValues(values);
    sampleForm.resetForm();
  };
  const sampleForm = useFormik({ initialValues, validationSchema, onSubmit });
  console.log(sampleForm);
  return (
    <>
      <h4>useFormik with Yup Validations</h4>

      <form onSubmit={sampleForm.handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="userName"
            onChange={sampleForm.handleChange}
            onBlur={sampleForm.handleBlur}
            value={sampleForm.values.userName}
            // {...sampleForm.getFieldProps("userName")}  // To reduce boilerPlate of onchange,onblue,value
          />
        </InputGroup>
        {sampleForm.touched.userName && sampleForm.errors.userName && (
          <Alert variant="info">{sampleForm.errors.userName}</Alert>
        )}

        <InputGroup className="mb-3">
          <InputGroup.Text>With textarea</InputGroup.Text>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            name="userDescription"
            onChange={sampleForm.handleChange}
            onBlur={sampleForm.handleBlur}
            value={sampleForm.values.userDescription}
          />
        </InputGroup>
        {sampleForm.touched.userDescription &&
          sampleForm.errors.userDescription && (
            <Alert variant="info">{sampleForm.errors.userDescription}</Alert>
          )}

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Select
            aria-label="Default select example"
            name="userType"
            onChange={sampleForm.handleChange}
            onBlur={sampleForm.handleBlur}
            value={sampleForm.values.userType}
          >
            <option value="">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </InputGroup>
        {sampleForm.touched.userType && sampleForm.errors.userType && (
          <Alert variant="info">{sampleForm.errors.userType}</Alert>
        )}

        <Form.Label>Range</Form.Label>
        <Form.Range
          name="range"
          value={sampleForm.values.range}
          min={10}
          max={100}
          step={10}
          onChange={sampleForm.handleChange}
          onBlur={sampleForm.handleBlur}
        />
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder={sampleForm.values.range}
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="range"
            onChange={sampleForm.handleChange}
            onBlur={sampleForm.handleBlur}
            value={sampleForm.values.range}
          />
        </InputGroup>
        <input
          type="date"
          className="form-control mb-3"
          name="date"
          value={sampleForm.values.date}
          onChange={sampleForm.handleChange}
          onBlur={sampleForm.handleBlur}
        />
        {sampleForm.touched.date && sampleForm.errors.date && (
          <Alert variant="info">{sampleForm.errors.date}</Alert>
        )}
        <div className="d-grid gap-2">
          <Button
            type="submit"
            variant="info"
            disabled={!(sampleForm.dirty && sampleForm.isValid)}
          >
            Submit
          </Button>
        </div>
      </form>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            {Object.keys(initialValues).map((k, index) => (
              <th key={index}>{k}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{values.userName}</td>
            <td>{values.userDescription}</td>
            <td>{values.userType}</td>
            <td>{values.range}</td>
            <td>{values.date}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Form4;
