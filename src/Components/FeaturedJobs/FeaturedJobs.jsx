import React from 'react';
import './FeaturedJobs.css'

const FeaturedJobs = ({ jobs }) => {
    console.log(jobs)
    const { img, company, title, location, salary } = jobs;
    return (
        <div className='job-container'>
            <p>{title}</p>
            <p>{company}</p>
            <div className='job-buttons'>
                <button className='btn-job-type'>Remote</button>
                <button className='btn-job-type'>Full Time</button>
            </div>
            <div className="location-salary">
                <div className="location">
                    <img src="../../../assets/Icons/Frame-4.png" alt="" />
                    <p>{location}</p>
                </div>
                <div className="salary">
                    <img src="../../../assets/Icons/Frame.png" alt="" />
                    <p>Salary: {salary}</p>
                </div>
            </div>
            <button className='btn'>View Details</button>
        </div>
    );
};

export default FeaturedJobs;