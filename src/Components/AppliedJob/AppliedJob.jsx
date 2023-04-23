import React from 'react';
import './AppliedJob.css'
import { Link } from 'react-router-dom';

const AppliedJob = ({ job }) => {
    console.log(job)
    const {id, img, title, company, location, salary} = job
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
                        <button className='applied-job-btn-job-type'>Remote</button>
                        <button className='applied-job-btn-job-type'>Full Time</button>
                    </div>
                    <div className="applied-job-location-salary">
                        <div className="applied-job-location">
                            <img src="../../../assets/Icons/Frame-4.png" alt="" />
                            <p>{location}</p>
                        </div>
                        <div className="applied-job-salary">
                            <img src="../../../assets/Icons/Frame.png" alt="" />
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