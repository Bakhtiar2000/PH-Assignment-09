import React from 'react';
import './FeaturedJobs.css'
import JobDetails from '../JobDetails/JobDetails';
import { Link } from 'react-router-dom';

const FeaturedJobs = ({ job }) => {
    const {id, img, company, title, location, salary,job_type, job_time } = job;
    return (
        <div className='job-container'>
            <img src={img} alt="" />
            <p>{title}</p>
            <p>{company}</p>
            <div className='job-buttons'>
                <button className='btn-job-type'>{job_type}</button>
                <button className='btn-job-type'>{job_time}</button>
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
            <Link to={`/jobDetails/${id}`}><button className='btn' >View Details</button></Link>
        </div>
    );
};

export default FeaturedJobs;