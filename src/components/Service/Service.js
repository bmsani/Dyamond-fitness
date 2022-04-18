import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {name, price, description, img} = service
    const shortText = description.slice(0,120) + '...'
    const navigate = useNavigate();
    return (
        <div className='col-md-4 border rounded-3'>
            <img className='img-fluid' src={img} alt="" />
           <h2 className='text-center text-primary'>{name}</h2>
           <h4 className='text-dark text-center'>Price: {price}</h4>
           <p><span className='fw-bold'>Service details:</span> {shortText}</p>
           <button onClick={() => navigate('/checkout')} className='btn rounded-pill btn-primary w-75 d-block mx-auto'> Book {name}</button>
           
        </div>
    );
};

export default Service;