import { Alert, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  userName: "",
  userDescription: "",
  userType: "",
  userIndian: false,
  checkbox: [],
  range: "",
  date: "",
};

function Form4() {
  const validationSchema = Yup.object({
    userName: Yup.string()
      .required("Enter Any Name")
      .min(3, "Min 3 Characters")
      .max(10, "Max 10 Characters"),
    userDescription: Yup.string().required("Description Required"),
    userType: Yup.string().required("select any one"),
    userIndian: Yup.string().required("check"),
    checkbox: Yup.array()
      .min(1, "Check at least one")
      .required("Check at least one"),
    date: Yup.string().required("select any Date"),
  });
  const onSubmit = (values) => {
    console.log("submit" + JSON.stringify(values, null, 1));
    sampleForm.resetForm();
  };
  const sampleForm = useFormik({ initialValues, validationSchema, onSubmit });
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

        <InputGroup className="mb-3">
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Indian?"
            name="userIndian"
            onChange={sampleForm.handleChange}
            onBlur={sampleForm.handleBlur}
            value={sampleForm.values.userIndian}
          />
        </InputGroup>
        <Form.Check
          inline
          label="1"
          name="checkbox"
          type="checkbox"
          id={`inline-checkbox-1`}
          onChange={sampleForm.handleChange}
          onBlur={sampleForm.handleBlur}
          value="first box"
        />
        <Form.Check
          inline
          label="2"
          name="checkbox"
          type="checkbox"
          id={`inline-checkbox-2`}
          onChange={sampleForm.handleChange}
          onBlur={sampleForm.handleBlur}
          value="second box"
        />
        <Form.Check
          inline
          label="3"
          name="checkbox"
          type="checkbox"
          id={`inline-checkbox-3`}
          onChange={sampleForm.handleChange}
          onBlur={sampleForm.handleBlur}
          value="third box"
        />
        {sampleForm.touched.checkbox && sampleForm.errors.checkbox && (
          <Alert variant="info">{sampleForm.errors.checkbox}</Alert>
        )}
        <br />
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
          <Button type="submit" variant="info">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}

export default Form4;
