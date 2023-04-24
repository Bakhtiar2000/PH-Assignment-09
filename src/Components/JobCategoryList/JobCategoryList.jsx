import React from 'react'; 
import './JobCategoryList.css'

const JobCategoryList = () => {
    return (
        <div className='container'>
            <h2 className='title'>Job Category List</h2>
            <p className='description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='jobs'>
                <div className='job'>
                    <img src="./assets/Icons/accounts 1.png" alt="" />
                    <h3>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className='job'>
                    <img src="./assets/Icons/business 1.png" alt="" />
                    <h3>Creative Design</h3>
                    <p>100+ Jobs Available</p>
                </div>
                <div className='job'>
                    <img src="./assets/Icons/social-media 1.png" alt="" />
                    <h3>Marketing & Sales</h3>
                    <p>150 Jobs Available</p>
                </div>
                <div className='job'>
                    <img src="./assets/Icons/chip 1.png" alt="" />
                    <h3>Engineering Job</h3>
                    <p>224 Jobs Available</p>
                </div>
                
            </div>
        </div>
    );
};

export default JobCategoryList;