import React from 'react';
import BannerImg from "../../images/Page images/1.png";
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='container'>
        <div className="row align-items-center">
            <div className="col-md-6 align-items-center">
                <h1 
                style={{fontSize: '24px'}}>Welcome to
                 <span className='brandName'>
                 <span className='text-danger'>Dyamond</span> Fitness</span></h1>
                 <h2 style={{fontSize: '3.2em'}} className='fw-bold lh-1 pt-4'>Become More Healthy and Stay Sporty</h2>
                 <p className='pt-4'>Hello there, Do you want to loss your fat, learn yoga, stay fit or want a proper diet to remain  healthy and fit?. I am here to help you out. Please contact me for your personal trainer. </p>
            </div>
            <div className="col-md-6">
                <img className='img-fluid' src={BannerImg} alt="" />
            </div>
        </div>
            <div className="row">
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;