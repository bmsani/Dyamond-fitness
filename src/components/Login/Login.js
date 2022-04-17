import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

      const handleEmail = event => {
        setEmail(event.target.value)
      }
      const handlePassword = event => {
          setPassword(event.target.value);
      }
      const handleSubmit = event => {
          event.preventDefault();
          signInWithEmailAndPassword(email, password);
      }

      const handleResetPassword = async() => {
            if(email){
                await sendPasswordResetEmail(email);
                alert('Email sent')
            }else{
                console.log('email invalide');
            }
      }
    
    if(loading){
        return <Loading></Loading>
    }  

    if(user){
        navigate(from, {replace: true})
    }
    

    return (
        <div>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className='mb-0'>New to xxx<Link className='btn btn-link' to='/register'>Please Register</Link></p>
                <p>Forget Password?<button className='btn btn-link' onClick={handleResetPassword}> Reset password</button></p>
            </Form>
        </div>
    );
};

export default Login;