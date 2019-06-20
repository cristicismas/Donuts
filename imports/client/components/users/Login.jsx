import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

class Login extends React.Component {
    constructor() {
        super();
    }

    onSubmit = (data) => {
        const {email, password} = data;

        Meteor.loginWithPassword(email, password, (err) => {
            if (!err) {
                FlowRouter.go('donuts.list');
            } else {
                alert(err.reason);
            }
        });
    };

    render() {
        return (
            <main className="cc-main">
                <h2 className="form-title">Log In</h2>
                <AutoForm schema={LoginSchema} onSubmit={this.onSubmit}>
                    <AutoField name="email"/>
                    <ErrorField name="email" className="error"/>

                    <AutoField name="password" type="password"/>
                    <ErrorField name="password" className="error"/>

                    <div className="fill-space buttons-group">
                        <a href="#" className="forgot-password">Forgot Password</a>
                        <button type="submit">
                            Sign in
                        </button>
                    </div>
                </AutoForm>
            </main>
        )
    }
}

const LoginSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String}
});

export default Login;