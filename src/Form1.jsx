import { Alert } from "react-bootstrap";
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
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="userName"
          onChange={sampleForm.handleChange}
          onBlur={sampleForm.handleBlur}
          value={sampleForm.values.userName}
        />

        {sampleForm.touched.userName && sampleForm.errors.userName && (
          <Alert variant="info">{sampleForm.errors.userName}</Alert>
        )}

        <textarea
          className="form-control mb-3"
          aria-label="With textarea"
          name="userDescription"
          onChange={sampleForm.handleChange}
          onBlur={sampleForm.handleBlur}
          value={sampleForm.values.userDescription}
        />

        {sampleForm.touched.userDescription &&
          sampleForm.errors.userDescription && (
            <Alert variant="info">{sampleForm.errors.userDescription}</Alert>
          )}

        <select
          className="form-control mb-3"
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
        </select>

        {sampleForm.touched.userType && sampleForm.errors.userType && (
          <Alert variant="info">{sampleForm.errors.userType}</Alert>
        )}

        <input
          type="range"
          className="form-control mb-3"
          name="range"
          value={sampleForm.values.range}
          min={10}
          max={100}
          step={10}
          onChange={sampleForm.handleChange}
          onBlur={sampleForm.handleBlur}
        />

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
          <button
            className="btn btn-info"
            type="submit"
            variant="info"
            disabled={!(sampleForm.isValid && sampleForm.dirty)}
          >
            Submit
          </button>
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
