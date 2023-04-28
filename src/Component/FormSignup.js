import React from 'react'
import useForm from '../hooks/useForm'
import validate from '../utils/validate'

function FormSignup() {
    const {handleChange, values, handleSubmit, errors} = useForm(validate)
  return (
    <div className ="form-content-right">
      <form className = "form" onSubmit={handleSubmit}>
        <h1>  Create your Account</h1>

            {/* username */}
          <div className='form-inputs'>
             <label htmlFor='username' className='form-label'>User Name </label>
             <input 
               type= "text" 
               id='username'
               name = "username"
               className= "form-input"
               placeholder="Enter your Username"
               value={values.username}
               onChange = {handleChange} >
               {/* {errors.username && <p>{errors.username}</p>} */}
             </input>          
             {errors.username && <p>{errors.username}</p>}
            </div>

            {/* email */}
            <div className='form-inputs'>
             <label htmlFor= "email" className='form-label'>Email </label>
             <input
               type= "text"
               id='email'
               name = "email"
               className= "form-input"
               placeholder="Enter your Email"
               value={values.email}
               onChange = {handleChange}>
               
               </input>          
               {errors.email && <p>{errors.email}</p>}
            </div>

            {/* phonenumber */}
            <div className='form-inputs'>
             <label htmlFor='phonenumber' className='form-label'> Phone Number </label>
             <input type= "type"
              id='phonenumber'
              name = "phonenumber"
              className= "form-input"
              placeholder="Enter your PhoneNumber"
              value={values.phonenumber}
              onChange = {handleChange}>
                 </input> 
                 {errors.phonenumber && <p>{errors.phonenumber}</p>}         
            </div>

            {/* password */}
            <div className='form-inputs'>
             <label htmlFor='password' className='form-label'> Password </label>
             <input type= "password"
              id='password'
              name = "password"
              className= "form-input" 
              placeholder="Enter your Password"
              value={values.password}
              onChange = {handleChange}>
                </input>          
                {errors.password && <p>{errors.password}</p>}
            </div>

            {/* confirm password */}
            <div className='form-inputs'>
             <label htmlFor='confirmpassword' className='form-label'> Confirm Password </label>
             <input type= "password"
              id='confirmpassword'
              name = "confirmpassword" 
              className= "form-input"
              placeholder="Confirm your Password"
              value={values.confirmpassword}
              onChange = {handleChange}>
              
                </input>          
                {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
            </div>
            {/* Button */}
            <button className='form-input-btn' type='submit'>Sign up</button>
            <br></br>
            <span className='form-input-login'>Already have an account? Login <a href='#'>Here</a>
             </span>

      </form>
      
    </div>
  )
}

export default FormSignup
