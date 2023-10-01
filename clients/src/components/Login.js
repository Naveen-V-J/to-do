import React, { useState } from 'react';
import {Form, FormControl, FormGroup, Button} from 'react-bootstrap';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

    }

    return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
        <h1 className='mb-3 text-center'>Sign In</h1>
        <Form className='w-25'>
            <FormGroup className='mb-3'>
              <FormControl type='email' placeholder='Email' />
            </FormGroup>
            <FormGroup className='mb-3'>
              <FormControl type='password' placeholder='Password' />
            </FormGroup>
            <FormGroup className='mb-3 text-center'>
              <Button variant="primary" type="submit" className="w-100">Submit</Button> {/* Make the button span full width */}
            </FormGroup>
            </Form>
        <div id="g_id_onload"
            data-client_id=""
            data-context="signin"
            data-ux_mode="redirect"
            data-login_uri="http://localhost:3000"
            data-auto_select="true"
            data-itp_support="true">
        </div>

        <div class="g_id_signin"
             data-type="icon"
             data-shape="circle"
             data-theme="outline"
             data-text="signin_with"
             data-size="large">
        </div>  
            
    </div>
  );
};

export default Login;