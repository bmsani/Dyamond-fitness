import React from 'react';

const Service = ({service}) => {
    const {name, price, description, img} = service
    return (
        <div>
           <p>service {name}</p>
        </div>
    );
};

export default Service;