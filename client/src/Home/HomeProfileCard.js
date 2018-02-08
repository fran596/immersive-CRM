import React from 'react'

const HomeProfileCard = () => {
    return (
        <div className="card-table card-profile animated fadeInUp text-center">
            <div className="img-fluid text-center">
                <h2>Welcome Back!</h2>
                <img className=" img-profile" src={require('../img/me.jpg')} alt="" />
            </div>
            <h5>Francisco Arroyo</h5>
        </div>
    );

}

export default HomeProfileCard;