import React from "react"; 
import { Formik, Form, Field, ErrorMessage } from "formik"; 
import * as Yup from "yup"; 
 
const initialValues = { 
  name: "", 
  email: "", 
  channel: "", 
}; 
 
const onSubmit = (values) => { 
  console.log(values); 
}; 
 
 
const YouTubeForm = () => { 
  return ( 
    <Formik 
      initialValues={initialValues} 
      validationSchema={Yup.object({ 
        name: Yup.string().required("Required").nullable(), 
        email: Yup.string() 
          .email("Please Enter Valid Email......") 
          .required("Required") 
          .nullable(), 
        channel: Yup.string().required("Required").nullable(), 
      })} 
    //   validate={validate} 
      onSubmit={onSubmit} 
    > 
      <Form> 
        <div> 
          <label htmlFor="name">Name: </label> 
          <Field type="text" id="name" name="name" /> 
          <ErrorMessage name="name" /> 
        </div> 
 
        <div> 
          <label htmlFor="email">E-mail: </label> 
          <Field type="email" id="email" name="email" /> 
          <ErrorMessage name="email" /> 
        </div> 
 
        <div> 
          <label htmlFor="channel">Channel: </label> 
          <Field type="text" id="channel" name="channel" /> 
          <ErrorMessage name="channel" /> 
        </div> 
 
        <button type="submit">Submit</button> 
      </Form> 
    </Formik> 
  ); 
}; 
 
export default YouTubeForm;