import React, { Component }                    from "react";
import { Form, Field, withFormik, FieldArray } from "formik";

import Input              from "../Input";
import * as yup           from "yup";
import styles             from "../SignInForm/SignInForm.module.scss";
import Button             from "../Button";
import Label              from "../Label";
import StyledErrorMessage from "../StyledErrorMessage";

const fields = [
	{
		name: "firstName",
		placeholder: "First Name",
		type: "text",

	},
	{
		name: "lastName",
		placeholder: "Last Name",
		type: "text",

	},
	{
		name: "email",
		placeholder: "Email",
		type: "email",

	},
	{
		name: "password",
		placeholder: "Password",
		type: "password",

	},
	{
		name: "confirmPassword",
		placeholder: "Confirm Password",
		type: "password",
	},
];
const SignupSchema = yup.object().shape({
	firstName: yup.string()
				  .min(2, 'Too Short!')
				  .max(50, 'Too Long!')
				  .required('Required'),
	lastName: yup.string()
				 .min(2, 'Too Short!')
				 .max(50, 'Too Long!')
				 .required('Required'),
	email: yup.string()
			  .email('Invalid email')
			  .required('Required'),
	password: yup.string().required('Password is required'),
	confirmPassword: yup.string()
							 .oneOf([yup.ref('password'), null], 'Passwords must match')
});
const SignUpForm = ( props ) => {
	const {values, isSubmitting} = props;
	return (
		<Form className={styles.form}>
			<FieldArray
				name='fields'
				render={arrayHelpers => (
					<div>
						{values.fields.map(( field, index ) => (
							<div key={index}>
								<Field name={field.name} value={values[field.name]} >
									{
										fieldProps => (
											<Label className={styles.fieldWrapper}>
												<Input placeholder={field.placeholder} type={field.type} {...fieldProps}/>
												<StyledErrorMessage className={styles.errorWrapper}
																	name={field.name}/>
											</Label>
										)
									}
								</Field>
							</div>
						))}
					</div>
				)}
			/>
			<Button className={styles.submitButton} disabled={isSubmitting} type='submit'>Register</Button>
		</Form>
	)


};

export default withFormik(
	{
		mapPropsToValues: () => ({
			firstName: '',
			lastName: '',
			email: "",
			password: "",
			confirmPassword:"",
			fields
		}),
		handleSubmit: (values, formikBag) => { alert( JSON.stringify( values, null, 4 ) ); },
		validationSchema: SignupSchema,
		validate:(props,...rest)=>{console.log(props,rest); }
	}
)(SignUpForm);

