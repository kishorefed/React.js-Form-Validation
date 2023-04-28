export default function validate(values){
   let errors = {};

   if(!values.username.trim()){
    errors.username = "Username required"
   }
   if (!values.email.trim()){
    errors.email = "Email required"
   }
   else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
    errors.email ="Email Address is Invalid"
   }

   if(!values.password.trim()){
    errors.password = "Password is required"
   } else if (values.password.length < 6) {
    errors.password ="Password needs to be 6 characters or more"
   }

   if(!values.confirmpassword.trim()){
    errors.confirmpassword ="Password is required"
   }
   else if(values.confirmpassword !== values.password){
    errors.confirmpassword ="Password didn't matches"
   }
   return errors;
}

