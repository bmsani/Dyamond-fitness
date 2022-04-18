import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Checkout = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <div className='my-5'>
        <h1 className='text-primary text-center my-3'>Checkout</h1>
            <Form className='w-50 d-block mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="Phone" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control style={{height: '80px'}} type="text" placeholder="Address" />
                </Form.Group>
                <Button className='rounded-pill d-block mx-auto w-25' onClick={handleSubmit} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;