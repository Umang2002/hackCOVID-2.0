import React from 'react';
import './Handwash.css';
import washa from '../../images/wash-a.png';
import washb from '../../images/wash-b.png';
import washc from '../../images/wash-c.png';
import washd from '../../images/wash-d.png';
import washe from '../../images/wash-e.png';
import washf from '../../images/wash-f.png';
import mainImg from '../../images/main-wash-img.png'


const Handwash = () => {
    return (
        <section className="hand-wash">
            <h1 className="heading">How to Wash Hand Properly?</h1>
             
            <div className="column">
          

               <div className="box-container">

             
                <div className="box">
                    <img src={washa} alt="" />
                    <h3>Water and Soap</h3>
                </div>

                <div className="box">
                    <img src={washb} alt="" />
                    <h3>Palm to Palm</h3>
                </div>
                <div className="box">
                    <img src={washc} alt="" />
                    <h3>Between Fingures</h3>
                </div>
                <div className="box">
                    <img src={washd} alt="" />
                    <h3>Focus on Thumbs</h3>
                </div>
                <div className="box">
                    <img src={washe} alt="" />
                    <h3>Back of Hands</h3>
                </div>
                <div className="box">
                    <img src={washf} alt="" />
                    <h3>Focus on Wrist</h3>
                </div>

             
                </div>
                <div className="main-image">
                <img  src={mainImg} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Handwash
