import { Form, Formik } from "formik";
import React from "react";
import FormControls from "./FormControls";
import * as Yup from "yup";
import { Button } from "react-bootstrap";

const languages = [
  { key: "Telugu", value: "telugu" },
  { key: "Hindi", value: "hindi" },
  { key: "English", value: "english" },
];

const gender = [
  { key: "Male", value: "male" },
  { key: "Female", value: "female" },
  { key: "Transgender", value: "TransGender" },
];

const jobType = [
  { key: "salaried", value: "salaried" },
  { key: "self-employed", value: "self-employed" },
  { key: "business", value: "business" },
];

const Reuse = () => {
  const initialValues = {
    name: "",
    email: "",
    description: "",
    comments: "",
    languages: "",
    gender: "",
    jobType: [],
    startDate: null,
    endDate: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required(),
    description: Yup.string().required(),
    comments: Yup.string().required(),
    languages: Yup.string().required(),
    gender: Yup.string().required(),
    jobType: Yup.array().min(1, "At least one job type is required"),
    startDate: Yup.date().required(),
    endDate: Yup.date().required(),
  });

  const onSubmit = (values, form) => {
    console.log(values);
    form.resetForm();
  };

  return (
    <>
      <h3>Reusable Components</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isValid, dirty }) => (
          <Form>
            <div className="row">
              <div className="col">
                <FormControls
                  control="input"
                  type="text"
                  name="name"
                  label="User Name"
                  placeholder="Enter Your Name"
                />
                <FormControls
                  control="input"
                  type="text"
                  name="email"
                  label="Email"
                  placeholder="Enter Your Email"
                />
                <FormControls
                  control="textarea"
                  name="description"
                  label="Description"
                  placeholder="Enter Description"
                />
                <FormControls
                  control="textarea"
                  name="comments"
                  label="Comments"
                  placeholder="Enter Comments"
                />
              </div>

              <div className="col">
                <FormControls
                  control="select"
                  name="languages"
                  label="Languages"
                  placeholder="Select Your Language"
                  options={languages}
                />

                <FormControls
                  control="checkbox"
                  name="jobType"
                  label="Job Type"
                  options={jobType}
                />
                <FormControls
                  control="date"
                  type="date"
                  name="startDate"
                  label="Select Start Date"
                  placeholder="Select Start Date"
                />
                <FormControls
                  control="date"
                  type="date"
                  name="endDate"
                  label="Select End Date"
                  placeholder="Select End Date"
                />
              </div>
            </div>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Reuse;
