import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='fixed-bottom bg-dark pt-3 d-flex justify-content-center align-items-center'>
            <p className='text-white fw-bold'> &copy; All Right reserved to <span className='brandName'><span className='text-danger'> Dyamond</span> Fitness</span></p>
        </div>
    );
};

export default Footer;