import { Alert, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useFormik } from "formik";
import { useState } from "react";

const initialValues = {
  userName: "",
  userDescription: "",
  userType: "",
  range: "",
  date: "",
};

function Form1() {
  const [values, setValues] = useState({});
  const validate = (values) => {
    console.log("validate" + JSON.stringify(values, null, 1));
    const errors = {};
    if (values.userName.length <= 3) {
      errors.userName = "User Name Must be GreatherThan 3 Characters";
    }
    if (values.userDescription.length <= 10) {
      errors.userDescription =
        "User Description Must be GreatherThan 10 Characters";
    }
    if (!values.userType) {
      errors.userType = "Select User Type";
    }
    if (!values.date) {
      errors.date = "Select Date";
    }
    const num = /^[0-9]+$/;
    if (!num.test(values.range)) {
      errors.range = "Only Numbers Allowed";
    }
    return errors;
  };
  const onSubmit = (values) => {
    console.log("submit" + JSON.stringify(values, null, 1));
    setValues(values);
    sampleForm.resetForm();
  };
  const sampleForm = useFormik({ initialValues, validate, onSubmit });
  console.log(sampleForm);
  return (
    <>
      <h4>useFormik</h4>

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
            type="number"
            placeholder={sampleForm.values.range}
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="range"
            onChange={sampleForm.handleChange}
            onBlur={sampleForm.handleBlur}
            value={sampleForm.values.range}
          />
        </InputGroup>
        {sampleForm.touched.range && sampleForm.errors.range && (
          <Alert variant="info">{sampleForm.errors.range}</Alert>
        )}
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
            disabled={!(sampleForm.isValid && sampleForm.dirty)}
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

export default Form1;
