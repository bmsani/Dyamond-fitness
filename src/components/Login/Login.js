import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

      if(error){
          toast(error.message)
      }

      const handleResetPassword = async() => {
            if(email){
                await sendPasswordResetEmail(email);
                toast('Email sent')
            }else{
                toast('Please white your email.');
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
        <h1 className='text-center text-primary mt-3'>Login</h1>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className='mb-0'>New to xxx<Link className='btn btn-link' to='/register'>Please Register</Link></p>
                <p>Forget Password?<button className='btn btn-link' onClick={handleResetPassword}> Reset password</button></p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </Form>
        </div>
    );
};

export default Login;