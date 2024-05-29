import React, { useState } from 'react';
import background_image from '../assets/homepharma.png';
import logo from '../assets/logo2.png'

// import Otp from './Otp';
import { Link } from 'react-router-dom';
const Confirmpassword = () => {
  const [Newpassword, setNewpassword] = useState('');
  const [Confirmpassword, setConfirmpassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    const NewpasswordRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!Newpassword) {
      errors.Newpassword = 'Email is required';
    } else if (!NewpasswordRegex.test(Newpassword)) {
      errors.Newpassword = 'Email is not valid';
    }

    if (!Confirmpassword) {
      errors.Confirmpassword = 'confirmpassword is required';
    } else if (!Confirmpassword.length < 6) {
      errors.Confirmpassword = 'confirmpassword  must be at least 6 characters long';
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
      setNewpassword('');
      setConfirmpassword('');
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
              <div className='flex'>
              {/* {errors.email_id && <p className="error" style={{
                color: ' red',
                fontSize: '0.8rem'

              }}>{errors.email_id}</p>} */}
             {/* <span color='red'>*</span> */}
              <label htmlFor=" *newpassword" style={{ marginLeft: '-90px', marginBottom: '30px' }}>New  password          </label>
              
              <input
                type="New password"
                id="New password"
                value={Newpassword}
                onChange={(e) => setNewpassword(e.target.value)}
                style={{
                  marginBottom: '5px',
                  padding: '5px',
                  position:'absolute',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  marginLeft: '24px',
                  marginBottom: '50px', ...(errors.Newpassword && {border:'1px solid red'})
                }}
              />
              </div>
            
            </div>
            <div className='flex'>
              <label htmlFor="Confirm password" style={{ marginLeft: '-120px' }}> 
              Confirm password  </label>
              <input
                type="Confirmpassword"
                id="Confirmpassword"
                value={Confirmpassword 
                  
                }
                onChange={(e) => setConfirmpassword (e.target.value)}
                style={{
                  marginBottom: '5px',
                  position:'absolute',
                  padding: '5px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  marginLeft: '15px',
                  // marginTop:'20px',
                  marginBottom: '20px',...(errors.Confirmpassword && {border:'1px solid red'})
                }}
              />
             
             
            </div>
                
                
                
               
               
           
               
            <button type="submit" style={{
              padding: '10px',
              border: 'none',
              borderRadius: ' 5px',
              backgroundColor: '#202878',
              color: 'white',
              cursor: 'pointer',
              margin:'10px',
              marginTop:'40px'
            }}>Submit</button>
           
          </form>
        </div>
      </div>
    </div >
  );
};

export default Confirmpassword;
