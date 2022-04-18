import React from 'react';
import BannerImg from "../../images/Page images/1.png";
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='container pb-5'>
            <div className="row align-items-center">
                <div className="col-md-6 align-items-center pt-5">
                    <h1
                        style={{ fontSize: '24px' }}>Welcome to
                        <span className='brandName'>
                            <span className='text-danger'>Dyamond</span> Fitness</span></h1>
                    <h2 style={{ fontSize: '3.2em' }} className='fw-bold lh-1 pt-4'>Become More Healthy and Stay Sporty</h2>
                    <p className='pt-4'>Hello there, Do you want to loss your fat, learn yoga, stay fit or want a proper diet to remain  healthy and fit?. I am here to help you out. Please contact me for your personal trainer. </p>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src={BannerImg} alt="" />
                </div>
            </div>

            <Services></Services>

            <div>
                <h1 className='text-center text-primary my-5'>Contact Us</h1>
                <div className='w-75 mx-auto my-5'>
                    <div class="input-group input-group-lg mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-lg">First Name</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <div class="input-group input-group-lg mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-lg">Last Name</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <div class="input-group input-group-lg mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-lg">Email</span>
                        <input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <div class="input-group">
                        <span class="input-group-text">Your message</span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;