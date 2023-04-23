import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../Utilities/fakedb';
import './JobDetails.css'
import Singlejob from '../Singlejob/Singlejob';

const JobDetails = () => {
    const totalData = useLoaderData();
    // console.log(jobData);
    const jobId = useParams();
    // console.log(jobId);

   const [jobDetails, setJobDetails] = useState([]);



   useEffect(() => {
    let saveCart = [];
    const jobData = totalData.find(job => job.id == jobId.id);
    if(jobData){
        saveCart.push(jobData);
        setJobDetails(saveCart);
      

   }
}, [])



const handleAppliedJob = (singleJob) => {
    let newCart = [];
    const exist = jobDetails.find(job => job.id == singleJob.id);
    if(!exist){
        singleJob.quantity = 1;
        newCart = [...jobDetails,singleJob];
    }
    else{
        exist.quantity = exist.quantity +1;
        const remaining = jobDetails.filter(job => job.id !== singleJob.id);
        newCart = [...remaining,exist];
    }
    setJobDetails(newCart);
    addToDb(singleJob.id);
}
    
    return (
        <div>
            {
                jobDetails.map(singleJob =>
                    <Singlejob
                    key={singleJob.id}
                    singleJob={singleJob}
                    handleAppliedJob={handleAppliedJob}
                    ></Singlejob>

                    )
            }

        </div>
    );
};

export default JobDetails;