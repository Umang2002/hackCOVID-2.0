import React from 'react';
import './Precautions.css'

import do1 from '../../images/do-img1.png';
import do2 from '../../images/do-img2.png';
import do3 from '../../images/do-img3.png';

import don1 from '../../images/dont-img1.png';
import don2 from '../../images/dont-img2.png';
import don3 from '../../images/dont-img3.png';

const Precautions = () => {
    return (
        <section className="precautions">

      <h1 className="heading">Take Precautions against covid-19</h1>

      <div className="column">
          <div className="box-container">
            <h3 className="title green">Things You Should Do</h3>

            <div className="box">
                <img src={do1} alt ="" />
                <div className="info">
                    <h3>wash your hand</h3>
                    <p>bhvbvv erjfnerfj jher erjnfern fjerf erjgernjf erfjernger </p>
                </div>
            </div>


            <div className="box">
                <img src={do2} alt ="" />
                <div className="info">
                    <h3>always wear mask</h3>
                    <p>bhvbvv erjfnerfj jher erjnfern fjerf erjgernjf erfjernger </p>
                </div>
            </div>


            <div className="box">
                <img src={do3} alt ="" />
                <div className="info">
                    <h3>stay home during fever</h3>
                    <p>bhvbvv erjfnerfj jher erjnfern fjerf erjgernjf erfjernger </p>
                </div>
            </div>
          </div>


          <div className="box-container">
            <h3 className="title red">Things You Should Not Do</h3>

            <div className="box">
                <img src={don1} alt ="" />
                <div className="info">
                    <h3>avoid close contact with animals</h3>
                    <p>bhvbvv erjfnerfj jher erjnfern fjerf erjgernjf erfjernger </p>
                </div>
            </div>


            <div className="box">
                <img src={don2} alt ="" />
                <div className="info">
                    <h3>avoid close contact with peoples</h3>
                    <p>bhvbvv erjfnerfj jher erjnfern fjerf erjgernjf erfjernger </p>
                </div>
            </div>


            <div className="box">
                <img src={don3} alt ="" />
                <div className="info">
                    <h3>avoid crowded area</h3>
                    <p>bhvbvv erjfnerfj jher erjnfern fjerf erjgernjf erfjernger </p>
                </div>
            </div>
          </div>
      </div>


        </section>
    )
}

export default Precautions
