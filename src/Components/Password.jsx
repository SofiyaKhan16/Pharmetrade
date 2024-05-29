import React, { useState } from 'react';
import background_image from '../assets/homepharma.png';
import logo from '../assets/logo2.png'

// import Otp from './Otp';
import { Link } from 'react-router-dom';
const Password = () => {
  const [email_id, setEmail_id] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

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
        marginTop: '100px',
        marginLeft: '350px',
        marginBottom: '20px'
      }}>
        <div className="signin-form" style={{
          width: '300px',
          margin: '0 auto',
          padding: '5rem',

        }} >

          <form onSubmit={handleSubmit}>
            <div>
              <div>
              {/* {errors.email_id && <p className="error" style={{
                color: ' red',
                fontSize: '0.8rem'

              }}>{errors.email_id}</p>} */}
             {/* <span color='red'>*</span> */}
              <label htmlFor=" *email" style={{ marginLeft: '-200px', marginBottom: '30px' }}><span style={{color:'red'}}> *</span>Email_id:</label>
              
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
              <label htmlFor="password" style={{ marginLeft: '-200px' }}> <span style={{color:'red'}}>*</span>Password:</label>
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
                  marginLeft: '15px',
                  marginBottom: '20px',...(errors.password && {border:'1px solid red'})
                }}
              />
             
             
            </div>
                
                
                
               
               
            <div style={{color:'red',marginLeft:'-35px'
            ,marginTop:'10px'
              
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
            }}>Submit</button>
            <div>
      
      <span style={{color:'black',position:'absolute',marginLeft:'-160px',marginBottom:'10px',marginTop:'5px'
   
     }}> Forget your password <Link to='/Reset' style={{textDecoration:'none'}}>Reset</Link></span>

     <div>
      
       <span style={{color:'black',position:'absolute',marginLeft:'-160px',marginBottom:'-10px',marginTop:'30px'
    
      }}> Having trouble logging in <Link to='/get help' style={{textDecoration:'none'}}>get help</Link></span> 
      
</div> 
     
</div>
          </form>
        </div>
      </div>
    </div >
  );
};

export default Password;
