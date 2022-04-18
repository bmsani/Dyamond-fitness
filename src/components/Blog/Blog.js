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
                        Authentication is called which process verify who someone is and authorization means how much access a user have for example there are many levels of users and different user get different benefits suppose a paid user get the most benefits from providers but is there any free user they doesn't get all of them. so the process which manages all of them is called authorization.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> <span className='fw-bold'>Why are you using firebase? What other options do you have to implement authentication?</span> </Accordion.Header>
                    <Accordion.Body>
                        I am using firebase for two services one is authentication and the second is hosting. There are many other competitors of firebase who provides the same services such as Parse, Back4app, Kinvey, Backendless, Kuzzle, Pubnub, Kumulos, Game Sparks, Hoodie, Appwrite, Deployd, NHost, Amplify JS, Heroku etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> <span className='fw-bold'>What other services does firebase provide other than authentication.</span> </Accordion.Header>
                    <Accordion.Body>
                        Firebase not only provides Authentication. Firebase is a full package that helps to build a mobile or web applications faster with fewer resources and more efficiently. Here are the services firebase provides besides authentication: Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config etc.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;