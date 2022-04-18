import React from 'react';
import sani from '../../images/about-me/IMG_20210205_164744.jpg'

const AboutMe = () => {
    return (
        <div className='container my-5'>
        <div className='w-50 mx-auto pb-2 border border-5 rounded-3'>
            <img className='img-fluid rounded-top' src={sani} alt="" />
            <h1 className='text-center'>Asgar Sani</h1>
            <p className='text-center fw-bold font-monospace'>My career Goal is to ba a Web developer. Currently i have enrolled in the Programming hero complete web development course. I am working hard to reach my goal in the next 3 months i have to work even harder to successfully finish the course and get a job as a web developer.</p>
        </div>
            
        </div>
    );
};

export default AboutMe;