import React                                   from 'react';
import { Form, withFormik, Field, FieldArray } from 'formik';
import * as Yup                                from 'yup';
import Input                       from '../Input';
import Label                       from '../Label';
import StyledErrorMessage          from '../StyledErrorMessage';
import styles from './SignInForm.module.scss';
import Button from '../Button';

const fields = [
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
];

const SignInForm = (props) => {
console.log(props);
  const { values, isSubmitting } = props;
  return (
    <Form className={styles.form}>
        <FieldArray
            name={fields}
            render={arrayHelpers => (
                <div>
                    {fields.map(( field, index ) => (
                        <div key={index}>
                            <Field name={field.name} value={values[field.name]}>
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
      <Button className={styles.submitButton} disabled={isSubmitting} type='submit'>login</Button>
    </Form>
  );
};

export default withFormik( {
                             handleSubmit: (values, formikBag) => { alert( JSON.stringify( values, null, 4 ) ); },
                             mapPropsToValues: () => ({ email: '', password: '' }),
                             validationSchema: Yup.object( {
                                                             email: Yup.string().email().required(),
                                                             password: Yup.string().required(),
                                                           } )
                           } )( SignInForm );