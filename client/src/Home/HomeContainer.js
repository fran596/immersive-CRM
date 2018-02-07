import React from 'react'
import HomeProfileCard from './HomeProfileCard'
import ToDosContainer from './Todos/ToDosContainer';

const HomeContainer = () => {
    return (
        <div className="col-md-10">
            <div className="row">
                <div className='col-md-4 class-container'>
                    <HomeProfileCard />
                </div>
                <div className='col-md-8 class-container float-right '>
                    <div className="card-table animated fadeInUp">
                        <div className=" card-todos">
                            <h5>What's for today?</h5>
                            <ToDosContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeContainer