import React, { useEffect, useState } from 'react';
import './AppliedJobs.css'
import { useLoaderData, useParams } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const AppliedJobs = () => {
    const params = useParams();
    const jobInfo = useLoaderData();

    const [job, setJob] = useState({})
    const [appliedJob, setAppliedJob] = useState([])

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => {
                const jobData = data.find(job => job.id == params.id);
                setJob(jobData)
            })
    }, [])
    console.log(job)

    const handleAddToCart = (job) => {

        let newAppliedJob = [];

        const existing = appliedJob.find(p => p.id === job.id);
        if (!existing) {
            job.quantity = 1
            newAppliedJob = [...AppliedJobs, job];
        }
        else {
            existing.quantity = existing.quantity + 1;
            const remaining = appliedJob.filter(p => p.id !== job.id)
            newAppliedJob = [...remaining, existing];
        }
        setAppliedJob(newAppliedJob);
        addToDb(job.id)
    }
    console.log(appliedJob)


    return (
        <div>
            <h2 className='Details-heading'>Applied Jobs</h2>
            <div className='applied-jobs-container'>
                <div className='filter'>
                <div className="dropdown">
                    <button className="drop-btn">Filter By <ChevronDownIcon className='icon'/>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Remote</a>
                        <a href="#">Onsite</a>
                    </div>
                </div>
                </div>
                {
                    <AppliedJob
                        key={appliedJob.id}
                        job={job}
                    ></AppliedJob>
                }
            </div>
        </div>
    );
};

export default AppliedJobs;