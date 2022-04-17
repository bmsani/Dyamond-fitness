import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
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
      useEffect(()=>{
          
      },[user])

    return (
        <div>
            <Form className='w-50 mx-auto' onSubmit={handleFormSubmit}>
                <h1 className='text-center'>Register</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" />
                </Form.Group>
                <p>{error}</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>Already have an account? <Link className='btn btn-link' to='/login'>Please Login</Link></p>
            </Form>
        </div>
    );
};

export default Register;