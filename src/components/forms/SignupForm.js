import React, {useState} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { authService } from "initializeFirebase";
import { StyledForm } from "components/appStyles/styles.tw";
import SocialLoginButtons from "./SocialLoginButtons";
import ChangeButton from "./ChangeButton";

const SignupForm = ({ newAccount, setNewAccount }) => {
  const [firebaseError, setFirebaseError] = useState([]);
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password:"" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const { email, password } = values;
        setTimeout(async () => {
          try {
            await authService.createUserWithEmailAndPassword(email, password);
          } catch (error) {
            //console.log(error.message);
            setFirebaseError([...firebaseError, {message: error.message, code: error.code}])
          }
          //alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <StyledForm>
      <Form >
        {
          firebaseError.map((v, k) => <p key={k} style={{color: "red"}}>{v.message}</p>)
        }
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />
        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />
        <ChangeButton newAccount={newAccount} setNewAccount={setNewAccount}/>
        <button type="submit">Submit</button>
        <SocialLoginButtons/>
      </Form>
      </StyledForm>
    </Formik>
  );
};

export default SignupForm;
