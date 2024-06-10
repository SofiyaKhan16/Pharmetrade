import React, { useState, useRef } from 'react';
import background_image from '../assets/homepharma.png';
import logo from '../assets/logo2.png'
import Changepassword from './Changepassword';
// import OTP2 from './OTP2';
import { Link } from 'react-router-dom';



const OTPInput = ({ length, onChangeOTP }) => {
  const [otp, setOTP] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, ""); // Allow only numeric input
    if (value) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
      onChangeOTP(newOTP.join(""));
    }
  };

  const handleBackspace = (element, index) => {
    if (element.value === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
   
          <div style={{ display: "flex", 
    marginLeft:'250px',marginTop:'-50px' }}>
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          value={data}
          maxLength="1"
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => e.key === "Backspace" && handleBackspace(e.target, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          style={otpStyle}
        />
      ))}
    </div>
    

  );
};
const Signin = () => {
  const [email_id, setEmail_id] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleOTPChange = (otp) => {
    console.log("Current OTP:", otp);
  };


  const validate = () => {
    let errors = {};
    const email_idRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email_id) {
      errors.email_id = 'Email is required';
    } else if (!email_idRegex.test(email_id)) {
      errors.email_id = 'Email is not valid';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Form submitted successfully');
      // Reset form
      setEmail_id('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <div style={{
        marginTop: '220px'
      }}>

      <img src={background_image} style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }} />
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
      }}>
        <img src={logo} style={{ width: '100px' }} />
      </div>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '80%',
        maxWidth: '600px',
        textAlign: 'center',
        marginTop: '130px',
        marginLeft: '350px',
        marginBottom: '20px'
      }}>
        <div className="signin-form" style={{
          width: '300px',
          margin: '0 auto',
          padding: '2rem',

        }} >
          <h2 style={{color:'#202878',marginBottom:'30px', fontSize:'20px',fontWeight:'bold'}}>Sign-In</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
              {/* {errors.email_id && <p className="error" style={{
                color: ' red',
                fontSize: '0.8rem'

              }}>{errors.email_id}</p>} */}
             {/* <span color='red'>*</span> */}
              <label htmlFor=" *email" style={{ marginLeft: '-100px', marginBottom: '30px' }}><span style={{color:'red'}}> *</span>Email/Phone</label>
              
              <input
                type="email_id"
                id="email_id"
                value={email_id}
                onChange={(e) => setEmail_id(e.target.value)}
                style={{
                  marginBottom: '5px',
                  padding: '5px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  marginLeft: '20px',
                  marginBottom: '20px', ...(errors.email_id && {border:'1px solid red'})
                }}
              />
              </div>
            
            </div>
            <div>
              <label htmlFor="password" style={{ marginLeft: '-100px' }}> <span style={{color:'red'}}>*</span>Password</label>
              <input
                type="password"
                id="password"
                value={password 
                  
                }
                onChange={(e) => setPassword (e.target.value)}
                style={{
                  marginBottom: '5px',
                  padding: '5px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  marginLeft: '38px',
                  marginBottom: '20px',...(errors.password && {border:'1px solid red'})
                }}
              />
              {/* {errors.password && <p className="error" style={{
                color: 'red',
                fontSize: '0.8rem'
              }}>{errors.password}</p>} */}
            </div>
                
                
                {/* <OTP2/> */}
                <div style={{ textAlign: 'center', marginTop: '26px' }}>
      <h5 style={{marginLeft:'-250px',marginTop:'-15px'  }}>Enter OTP</h5>
      <OTPInput length={6} onChangeOTP={handleOTPChange} />

    </div>
                

            <div style={{color:'red',marginLeft:'-35px'
            ,marginTop:'30px'
              
            }}> <span style={{position:'absolute',marginLeft:'-55px',color:'black'}}>Note :</span>* Fields are mandatory
            </div>
               
            <button type="submit" style={{
              padding: '10px',
              border: 'none',
              borderRadius: ' 5px',
              backgroundColor: '#202878',
              color: 'white',
              cursor: 'pointer',
              margin:'10px',
              marginTop:'10px'
            }}>Sign In</button>

            <div>
                  <label style={{marginRight:'10px',marginBottom:'80px',position:'absolute',marginLeft:'-236px',textDecorationLine:'none'}}> 
                 
                  <Link to='/password' style={{textDecoration:'none',color:'blue'}}>Forget Password </Link> 
                  </label>
                </div> 
                <div>
                  <label style={{marginRight:'10px',marginBottom:'80px',position:'absolute',marginLeft:'96px',textDecorationLine:'none'}}> 
                 
                  <Link to='/Changepassword' style={{textDecoration:'none',color:"blue"}}>Change Password </Link> 
                  </label>
                </div> 
            
            
          </form>
        </div>
      </div>
    </div >
  );
};
const otpStyle = {
  width: "20px",
  height: "20px",
  marginLeft:'-185px',
  // margin: "0 3px",
  fontSize: "12px",
  marginBottom:'-10px',
  display:'flex',
  marginTop:'27px',
  textAlign: "center",
  border: "1px solid #ddd",
  borderRadius: "4px",
//   marginTop:'5px',
   marginRight:'188px'
};
export default Signin;
