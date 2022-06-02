import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container py-3'>
        <h1 className='text-center fw-bold my-5 text-primary'>Frequently asked questions</h1>
            <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <span className='fw-bold'>Difference between authentication and authorization</span> </Accordion.Header>
                    <Accordion.Body>
                       hi
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> <span className='fw-bold'>Why are you using firebase? What other options do you have to implement authentication?</span> </Accordion.Header>
                    <Accordion.Body>
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> <span className='fw-bold'>What other services does firebase provide other than authentication.</span> </Accordion.Header>
                    <Accordion.Body>
                        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;