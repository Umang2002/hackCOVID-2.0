import React from 'react';
import './Tracker.css';
import project from '../../images/project.png';
import { Link } from 'react-router-dom';

const Tracker = () => {
    return (
        <section className="tracker">

            <h1 className="heading">Covid-19 Tracker</h1>
     
            <div className="box-container">
                <div className="box">
                   <img src ={project} alt ="" />
                   <Link to ='/' className="btn">Live Demo </Link>
                   <p>Watch live status of corona virus cases!!</p>
                </div>
            </div>

        </section>
    )
}

export default Tracker
