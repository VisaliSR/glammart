// import React from 'react';
// import './Login.css';
// function Login() {
//   return (
//       <body>
//     <div>
//       <center>

//      <h1>Effortless Maintenance, Effortless Booking!</h1>
//       </center>
     
// <br></br>
// <center>


//    <fieldset>
//     <h2>   
//       Welcome Back :)
//     </h2>
    
//     <br></br>
    
    
//       <label>Name:</label><br></br>
//         <input type="text" placeholder="Name"></input>
      
//        <br></br>
//        <br></br>
//       <label>Email:</label><br></br>
      
//           <input type="email" placeholder="E-mail"></input>
        
//         <br></br>
//         <br></br>
        
//         <center>

//         <button>Login</button><br></br>
//         <br></br>
//         </center>
//         <center>
//         <p>Don't have an account?</p><button>Sign up</button>
//         </center>
         
//    </fieldset>
 
// </center>
//     </div>
//         </body>
   
//   );
// }

// export default Login;

import React from "react";
import './Login.css';
import { Link } from "react-router-dom";
// import { FaUser,FaLock } from "react-icons/fa";
const Login=()=>{
    return(
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    {/* <FaUser className='icon'/> */}
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    {/* <FaLock className='icon'/> */}
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button className="btn"type="submit">Login</button>
                <div className="register-link">
                    <p>Or  <br/><Link to='/Signup'>Signup</Link></p>
                </div>
            </form>
         </div>
    );
}
export default Login;
