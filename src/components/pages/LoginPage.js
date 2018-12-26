import React from 'react';
import LoginForm from './../forms/LoginForm';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    submit = data => {
        console.log(data);
    };
    
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm submit={this.submit} />
            </div>
        )
    }
}


export default LoginPage;
