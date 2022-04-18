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
        <h1 className='text-center'>Services {services.length}</h1>
        {
            services.map(service => <Service service={service} key={service.id}></Service>)
        }
            
        </div>
    );
};

export default Services;