import React, {useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { authService } from "initializeFirebase";
import { StyledForm } from "../appStyles/styles.tw";
import ChangeButton from "./ChangeButton";

const LoginForm = ({ newAccount, setNewAccount }) => {
  const [firebaseError, setFirebaseError] = useState([]);
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string()
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const { email, password } = values;
        setTimeout(async() => {
          try {
            await authService.signInWithEmailAndPassword(email, password)
          } catch (error) {
            console.log(error)
            setFirebaseError([...firebaseError, { message:error.message, code:error.code }])
          }
          //alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <StyledForm>
        <Form>
          {
            firebaseError.map((v, k) => <p key={k} style={{color: "red"}}>{v.message}</p>)
          }
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />
          <ChangeButton newAccount={newAccount} setNewAccount={setNewAccount}/>
          <button type="submit">Submit</button>
        </Form>
      </StyledForm>
    </Formik>
  );
};

export default LoginForm;