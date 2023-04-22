import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const params= useParams();
    console.log(params)
    const jobInfo= useLoaderData();
    console.log(jobInfo)
    return (
        <div>
            <h2>Job Details</h2>
        </div>
    );
};

export default JobDetails;