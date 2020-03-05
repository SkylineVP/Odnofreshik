import React, {Component}                from "react";
import {Formik, Form, Field, withFormik} from 'formik'
import PropTypes                         from 'prop-types'
import Input                             from "../Input";

const handleSubmit = (values) => {

};

const SignInForm = (props) => {
    const {initialValues} = props;
    return (
        <Form>
            <Field validate={} type='login' name='login' component={Input}/>
            <Field type='password' name='password'/>
            <div onClick={props.submitForm}>Login</div>
        </Form>
    )


};

SignInForm.propTypes = {
    initialValues: PropTypes.shape({
        login: PropTypes.string,
        password: PropTypes.string
    })
};


export default withFormik(
    {
        mapPropsToValues: () => ({
            login: "",
            password: ""
        }),
        handleSubmit: handleSubmit,
    }
)(SignInForm);
