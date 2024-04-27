import React from "react";
import './Aboutus.css';
const Aboutus = () =>{
    return(
        <div>
        <div class="sec-a">
    <div class="container">
       <div class="row">
        <br/><br/><div class="about">
            <br/><br/>
          <h4  align="center">How we work</h4>
          <h3 align="center">Our Core Values</h3>
          <p align="center">Our fundamental principles, beliefs and values that drive our business</p></div>
          <div class="col-md-3 col-sm-6 col-xs-12">
             <div class="sec-b-a">
                <img src="reliable.jpg" width="150px" height="150px"/>
                <br></br>
                <h3>Reliability</h3>
                <h4>WE WANT TO BE KNOWN AS RELIABLE</h4>
                <p>We are committed to providing our reliability by delivering the best possible care and treatment</p>
             </div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
             <div class="sec-b-b">
                <img src="responsibility.jpg" width="150px" height="150px"/>
                <br></br>
                <h3>Responsibility</h3>
                <h4>WE ARE MOTIVATED BY RESPONSIBILITY</h4>
                <p>We always strive to do everything in our capacity to serve our patients better</p>
             </div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
             <div class="sec-b-c">
                <img src="reliability.jpg" width="150px" height="150px"/><br></br>
                <h3>Respect</h3>
                <h4>WE TREAT OTHERS AS WE EXPECT TO BE TREATED</h4>
                <p>We always treat people with courtesy, politeness and kindness</p>
             </div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
             <div class="sec-b-d">
                <img src="reasonable.jpg" width="150px" height="150px"/><br></br>
                <h3>Reasonable</h3>
                <h4>WE ARE GUIDED BY OUR INTENT TO BE FAIR</h4>
                <p>We are committed to offer the best healthcare at the most affordable price</p>
             </div>
          </div>
       </div>
       </div>
    </div>
    </div>
    
);
};
export default Aboutus;