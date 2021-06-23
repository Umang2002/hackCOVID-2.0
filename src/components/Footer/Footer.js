import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

const Fotter = () => {
    return (
      <div className="footer">
          <div className="box-container">
            <div className="box">
               <h3>About Us</h3>
               <p>I Don’t Possess A Good Financial Condition At This Stage To Afford For This Course For The Above-Mentioned Reasons. I Don’t Have Enough Money To Invest In My Education, I Can Invest Only My Time Now.</p>

            </div>
            <div className="box">
                <h3>Get Update from Us</h3>
                <input type="text" className="input" placeholder="Enter Your Email Address"/>
                <button className="btn">SEND</button>
            </div>
            <div className="box">
                <h3>Quick Links</h3>
                <Link to="/">Home</Link>
                <Link to="/prevent">Prevent</Link>
                <Link to="/symptoms">Symptoms</Link>
                <Link to="/precautions">Precautions</Link>
                <Link to="/tracker">Tracker</Link>
                <Link to="/hand-wash">Hand-Wash</Link>

            </div>

            <div className="box">
                <h3>Follow Us</h3>
                <Link to="/">Facebook</Link>
                <Link to="/">Instagram</Link>
                <Link to="/">Github</Link>
                <Link to="/">Twitter</Link>
                <Link to="/">Linkedin</Link>
                <Link to="/">Youtube</Link>

            </div>
          </div>
          <h1 className="credit">
              created by<a href="#"> Umang & Parth</a> &copy; copyright 
          </h1>
      </div>
    )
}

export default Fotter
