import React from 'react';
import './AppliedJob.css'
import { Link } from 'react-router-dom';

const AppliedJob = ({ singleJob }) => {
    console.log(singleJob)
    const {id, img, title, company, location, salary, job_type, job_time} = singleJob
    return (
        <div className='applied-job-container'>
            <div className='applied-job-flex'>
                <div className='applied-job-img'>
                <img src={img} alt="" />
                </div>
                <div className='applied-job-flex-column'>
                    <h3>{title}</h3>
                    <p>{company}</p>
                    <div className='applied-job-buttons'>
                        <button className='applied-job-btn-job-type'>{job_type}</button>
                        <button className='applied-job-btn-job-type'>{job_time}</button>
                    </div>
                    
                    <div className="applied-job-location-salary">
                        <div className="applied-job-location">
                            <img src="./assets/Icons/Frame-4.png" alt="" />
                            <p>{location}</p>
                        </div>
                        <div className="applied-job-salary">
                            <img src="./assets/Icons/Frame.png" alt="" />
                            <p>Salary: {salary}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={`/jobDetails/${id}`}><button className='btn' >View Details</button></Link>
        </div>
    );
};

export default AppliedJob;