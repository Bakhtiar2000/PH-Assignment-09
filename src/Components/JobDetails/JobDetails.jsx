import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css'

const JobDetails = () => {
    const params = useParams();
    console.log(params.id)
    const jobInfo = useLoaderData();
    console.log(jobInfo.id)
    const [job, setJob] = useState({})

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => {
                const jobData = data.find(job => job.id == params.id);
                setJob(jobData)
            })
    }, [])

    const { title, description, responsibilities, educational_requirements, experiences, location, salary, phone, email, address } = job;

    return (
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
                <button className='btn'>Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetails;