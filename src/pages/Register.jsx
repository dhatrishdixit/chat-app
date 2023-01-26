import { React, useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
   const [err, setErr] = useState(false)
  const handleSubmit = async (e) =>{

      e.preventDefault();
      const displayName =e.target[0].value;
      const email =e.target[1].value;
      const password =e.target[2].value;
      const file =e.target[3].files[0];
 

try{

 // create user 
  const res = await createUserWithEmailAndPassword(auth,email,password);


const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);
uploadTask.on('state_changed', 
  (err) => {
     setErr(true);
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user,{
              displayName,
              downloadURL

            });
    });
  }
);
   }
catch(err){
   setErr(true);
}
  }

  return (
   <div className='formContainer'>
    <div className='formWrapper'>
    <span className='logo'>ChatNow</span>
    <span className='title'>Register</span>
    
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <input type='file' id='file' />
        <label htmlFor='file'>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="2.3em" width="2.3em" xmlns="http://www.w3.org/2000/svg"><path fill="#8CBCD6" d="M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"></path><circle fill="#B3DDF5" cx="35" cy="16" r="3"></circle><polygon fill="#9AC9E3" points="20,16 9,32 31,32"></polygon><polygon fill="#B3DDF5" points="31,22 23,32 39,32"></polygon><circle fill="#43A047" cx="38" cy="38" r="10"></circle><g fill="#fff"><rect x="36" y="32" width="4" height="12"></rect><rect x="32" y="36" width="12" height="4"></rect></g></svg>
           <span> Add avatar</span>
          </label>
        <button>Sign up</button>
        {err && <span>Something went wrong </span>}
    </form>
    
     <p>Do you already have an account? Login</p></div>
   </div>
  )
}

export default Register