import React          from 'react';
import { withRouter } from 'react-router';
import './SignUpPage.scss'
import SignUpForm from "../../components/forms/SignUpForm";

const SignUpPage = (props) => {

  return (

        <SignUpForm/>
  );
};

export default withRouter( SignUpPage );