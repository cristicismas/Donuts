import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

class Register extends React.Component {
    constructor() {
        super();

    }

    onSubmit = (data) => {
        const {email, password} = data;

        Accounts.createUser({
            email,
            password,
        }, (err) => {
            if (!err) {
                FlowRouter.go('donuts.list');
            }
            else {
                alert(err.reason);
            }
        })
    };

    render() {
        return (
            <main>
                <h2 className="form-title">Sign Up</h2>
                
                <AutoForm schema={RegisterSchema} onSubmit={this.onSubmit}>
                    <AutoField name="email"/>
                    <ErrorField name="email" className="error"/>

                    <AutoField name="password" type="password"/>
                    <ErrorField name="password" className="error"/>

                    <AutoField name="confirm_password" type="password"/>
                    <ErrorField name="confirm_password" className="error"/>

                    <button type="submit" className="fill-space">
                        Sign up
                    </button>
                </AutoForm>
            </main>
        )
    }
}

const RegisterSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String},
    confirm_password: {
        type: String,
        custom() {
            if (this.value !== this.field('password').value) {
                return 'passwordMismatch';
            }
        }
    }
});

export default Register;