import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mb-5'>
        <h1 className='text-center fs-1 my-5'>Services</h1>
        <div className="row">
        {
            services.map(service => <Service service={service} key={service.id}></Service>)
        }     
        </div>
        </div>
    );
};

export default Services;