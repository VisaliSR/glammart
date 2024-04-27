// import './Signin.css';
// import React from 'react';
// import { Link } from 'react-router-dom';
// const Signin=()=>{
//   return(
    

//     <div>
   
//         <center>
//           <h1>"Drive, Click, Done - Booking Made Simple!"
//     </h1>
//     <h2>OOPS..! Welcoming you for the first time :</h2>
   
    

    
//     <form>
//     <br></br>
    
//     <input type="text" placeholder='First Name' required></input>

//     <br></br>
//     <br></br>
    
    
//     <input type="text" placeholder='Last Name'></input>

    
//     <br></br>
//     <br></br>
    
    
//     <input type="text" placeholder='Email Id'></input>

//     <br></br>
//     <br></br>
   
    
//     <input type="text" placeholder='Phone Number'></input>

//     <br></br>
//     <br></br>

 
//     <input type="text" placeholder='Vehicle Make and Model'></input>

//     <br></br>
//     <br></br>

   
//     <input type="text" placeholder='Vehicle Identification Number (VIN):'></input>

//     <br></br>
//     <br></br>

   
//     <input type="text" placeholder='License Plate Number:'></input>

//     <br></br>   
//     <br></br>

   
//     <input type="text" placeholder='Preferred Service Location'></input>

//     <br></br>
//     <br></br>

    
//     <input type="text" placeholder='Communication Preferences:'></input>

//     <br></br>
//     <br></br>


//   <input type="checkbox" name="Terms and Condition"  ></input>
// <button className='Button'> Terms And Conditions
//   </button>
// </form>
// <br></br>

//     <button className='click'><Link to='/Signin'>Registered</Link></button>
   
//     </center>
//     </div>



   
//   );
// }
// export default Signin;

import React from "react";
import './Signup.css';
// import { FaUser,FaLock,FaPhoneAlt } from "react-icons/fa";
// import { IoIosMail } from "react-icons/io";
const Signup=()=>{
    return(
        <div className="wrapper">
            <form action="">
                <h1>Sign-Up</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    {/* <FaUser className='icon'/> */}
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email id" required/>
                    {/* <IoIosMail className='icon'/> */}
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    {/* <FaLock className='icon'/> */}
                </div>
                <div className="input-box">
                    <input type="phone" placeholder="Contact Number" required/>
                    {/* <FaPhoneAlt className='icon'/> */}
                </div>
                <button className="btnsign" type="submit">Sign Up</button>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
         </div>
         

    );
}
export default Signup;


