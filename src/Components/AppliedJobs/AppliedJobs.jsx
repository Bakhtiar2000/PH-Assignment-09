import React, { useState } from 'react';
import './AppliedJobs.css'
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const AppliedJobs = () => {
    const saveCart = useLoaderData();
    console.log(saveCart);
    const [alljobs, setAlljobs] = useState(saveCart);

    const filterhandler = (job_type) => {
        const filterjob = saveCart.filter(job => job.job_type == job_type || job.job_type == job_type);
        console.log(filterjob);
        setAlljobs(filterjob);
    }

    console.log(alljobs)

    return (
        <div>
            <h2 className='Details-heading'>Applied Jobs</h2>
            <div className='applied-jobs-container'>
                <div className='filter'>
                <div className="dropdown">
                    <button className="drop-btn">Filter By <ChevronDownIcon className='icon'/>
                    </button>
                    <div className="dropdown-content">
                        <a onClick={() => filterhandler('Remote')}>Remote</a>
                        <a onClick={() => filterhandler('Onsite')}>Onsite</a>
                    </div>
                </div>
                </div>
                {
                    alljobs.map(singleJob=>
                        <AppliedJob
                            key={singleJob.id}
                            singleJob={singleJob}
                        ></AppliedJob>
                    )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;