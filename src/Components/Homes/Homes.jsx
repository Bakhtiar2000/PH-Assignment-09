import React, { useState } from 'react';
import './Homes.css'
import Introduction from '../Introduction/Introduction';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Homes = () => {
    const jobs = useLoaderData()
    const [showAllData, setShowAllData] = useState(false);

    const dataToDisplay = showAllData ? jobs : jobs.slice(0, 4);

    const handleClick = () => {
        setShowAllData((prevShowAllData) => !prevShowAllData);
    };
    return (
        <div className='homes-container'>
            <Introduction></Introduction>
            <JobCategoryList></JobCategoryList>
            <div className='featured-jobs-container'>
                <h2 className='title'>Featured Jobs</h2>
                <p className='description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='jobs-container'>
                    {
                        dataToDisplay.map(job => <FeaturedJobs
                            key={job.id}
                            job={job}
                        ></FeaturedJobs>)
                    }
                </div>
                <button className='btn' onClick={handleClick}>
                    {showAllData ? "Show less data" : "See all data"}
                </button>
            </div>
        </div>
    );
};

export default Homes;