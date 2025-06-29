import React from "react";  
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function App() {
  const validationSchema = Yup.object({
     name:Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format.").required("Email is required"),
    password:Yup.string().min(6,"Passwoed should be at least 6 characters").required("Password is required")
  });

  const initialValues = {
    name:"",
    email: "",
    password: ""
  };
  const handleSubmit = (values,{resetForm}) => {
    console.log("form values :", values);
    alert("Form is submitted");
    resetForm();
  }
 

  return (
    <div>
      <h1>Simple Login Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name"/>
              <ErrorMessage name="name"/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email"/>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password"id="password"name="password" />
              <ErrorMessage name="password"/>
            </div>

           
            <button type="submit">Submit</button> 
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;

