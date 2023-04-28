import React, { useState } from 'react';

function useForm(validate) {
  const [values, setValues] = useState({
     username:"",
     email:"",
     phonenumber:"",
     password:"",
     confirmpassword:""
  });

  const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     console.log(e.target.value,e.target.name) 
// };

//    destructing the above line to this
 const handleChange = (e) => {

    const { name, value } = e.target;

    setValues((prevValues) => {
         return{
            ...prevValues,
            [name]: value,
        };
    });
 };

 const handleSubmit = (e) => {
     e.preventDefault();

     setErrors(validate(values));
 };

return {handleChange, values , handleSubmit, errors};


};

export default useForm;
