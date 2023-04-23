import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css'

const JobDetails = () => {
    const params = useParams();
    const jobInfo = useLoaderData();
    const [job, setJob] = useState({})

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => {
                const jobData = data.find(job => job.id == params.id);
                setJob(jobData)
            })
    }, [])

    const {id, title, description, responsibilities, educational_requirements, experiences, salary, phone, email, address } = job;

    return (
        <div>
            <h2 className='Details-heading'>Job Details</h2>
            <div className='details-container'>
            <div>
                <p className='details-description'><span className='details-title'>Job Description: </span>{description}</p>
                <p className='details-description'><span className='details-title'>Job Responsibility: </span>{responsibilities}</p>
                <p className='details-title'>Educational Requirements: </p>
                <p className='details-description'>{educational_requirements}</p>
                <p className='details-title'>Experiences: </p>
                <p className='details-description'>{experiences}</p>
            </div>

            <div className='flex-column'>
                <div className='data-details-container'>
                    <h3>Job Details</h3>
                    <hr />
                    <div className='flex'>
                        <img src="../../../assets/Icons/Frame.png" alt="" />
                        <p>Salary: {salary} (Per Month)</p>
                    </div>
                    <div className='flex'>
                        <img src="../../../assets/Icons/Frame-1.png" alt="" />
                        <p>Job Title: {title} </p>
                    </div>

                    <h3>Contact Information</h3>
                    <hr />
                    <div className='flex'>
                        <img src="../../../assets/Icons/Frame-2.png" alt="" />
                        <p>Phone: {phone}</p>
                    </div>
                    <div className='flex'>
                        <img src="../../../assets/Icons/Frame-3.png" alt="" />
                        <p>email: {email}</p>
                    </div>
                    <div className='flex'>
                        <img src="../../../assets/Icons/Frame-4.png" alt="" />
                        <p>address: {address}</p>
                    </div>
                </div>
                <Link to={`/appliedJobs/${id}`}><button className='btn btn-width'>Apply Now</button></Link>
            </div>
        </div>
        </div>
    );
};

export default JobDetails;