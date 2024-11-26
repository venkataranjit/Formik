import { Alert, Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useFormik } from "formik";

const initialValues = {
  userName: "",
  userDescription: "",
  userType: "",
  userIndian: false,
  checkbox: [],
  range: "",
  date: "",
};

function BasicForm() {
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
    return errors;
  };
  const onSubmit = (values) => {
    console.log("submit" + JSON.stringify(values, null, 1));
  };
  const sampleForm = useFormik({ initialValues, validate, onSubmit });
  // console.log(sampleForm);
  return (
    <>
      <Row>
        <Col sm={3}></Col>
        <Col sm={6}>
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
              <Alert variant="primary">{sampleForm.errors.userName}</Alert>
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
                <Alert variant="primary">
                  {sampleForm.errors.userDescription}
                </Alert>
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
              <Alert variant="primary">{sampleForm.errors.userType}</Alert>
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
            <input
              type="date"
              className="form-control mb-3"
              name="date"
              value={sampleForm.values.date}
              onChange={sampleForm.handleChange}
              onBlur={sampleForm.handleBlur}
            />
            {sampleForm.touched.date && sampleForm.errors.date && (
              <Alert variant="primary">{sampleForm.errors.date}</Alert>
            )}
            <div className="d-grid gap-2">
              <Button type="submit" variant="info">
                Submit
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </>
  );
}

export default BasicForm;
