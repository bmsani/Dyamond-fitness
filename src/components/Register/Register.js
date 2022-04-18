import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        emailPasswordError,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const handleEmail = event => {
          setEmail(event.target.value)
      }
      const handlePassword = event => {
        setPassword(event.target.value)
      }
      const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
      }
    
      const handleFormSubmit = event => {
        event.preventDefault();
          if(password !== confirmPassword){
              return setError("password didn't match")
          }

          createUserWithEmailAndPassword(email, password)

      };
      if(loading){
          return <Loading></Loading>
      }

      if(user){
          navigate(from);
      }


    return (
        <div>
            <Form className='w-50 mx-auto' onSubmit={handleFormSubmit}>
                <h1 className='text-center text-primary mt-3'>Register</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <p>{error}</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>Already have an account? <Link className='btn btn-link' to='/login'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Register;