import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { useCreateUserWithEmailAndPassword,useSendPasswordResetEmail , useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
const Login = () => {
    const navigate =useNavigate()
    const [email, setEmail] = useState('');
    const [resetEmail, setResetEmail] = useState('');
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const handleResetPassword = async () => {
      try {
        await sendPasswordResetEmail(resetEmail);
        // Password reset email sent successfully.
        setResetEmail('');
        Swal.fire({
          position: 'top-up',
          icon: 'success',
          title: 'Password Reset Email Sent',
          text: 'Check your email for instructions on how to reset your password.',
          showConfirmButton: false,
          timer: 3000,
        });
      } catch (error) {
        console.error('Error sending password reset email', error);
        Swal.fire({
          icon: 'error',
          title: 'Password Reset Failed',
          text: error.message,
        });
      }
    };
    
    
    
    
 
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
      // const [updateProfile, updating, error2] = useUpdateProfile(auth);
      const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
      const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
      
      // const [token] =useToken(user)
      let signInError;
   
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data.email)
        setEmail(data.email)
        // createUserWithEmailAndPassword(data.email, data.password);
        signInWithEmailAndPassword(data.email, data.password);
         }
         if(error || error1 || error2){
            signInError= <p className='text-red-500'> {error?.message} || {error1?.message}</p>
          }
          if(user||user1 || user2){
            console.log(user)
            Swal.fire({
              position: 'top-up',
              icon: 'success',
              title: `Sign Up Successfull`,
              showConfirmButton: false,
              timer: 1500
            })
            navigate("/")
          }
          if(loading || loading1 || loading2){
            return <div class="h-screen bg-white">
            <div class="flex justify-center items-center h-full">
              <img class="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt=""/>
            </div>
            </div>
          }
    return (
        <div>
          <div class="py-10">
  
  <div class="flex w-96 flex-col space-y-5 rounded-lg border py-10 px-5 shadow-xl mx-auto">
    <div class="mx-auto mb-2 space-y-3">
      <h1 class=" text-3xl font-bold text-gray-700">Sign Up</h1>
      {/* <p class="text-gray-500">Sign Up to access your account</p> */}
    </div>

<form onSubmit={handleSubmit(onSubmit)}>
<div>
    </div>
  
    <div>
      <div class="relative mt-2 w-full">
        <input {...register("email", {
  required:{
    value:true,
    message:"Error email message"
  },
  pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
})} onChange={(e) => setResetEmail(e.target.value)}
        type="text" id="email" name='email' class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder="Email" />
       <label className="label">
{errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
{errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
</label>
      </div>
    </div>
  
    <div>
      <div class="relative mt-2 w-full">
        <input {...register("password", {
required:{
  value:true,
  message:" Error password  message"
},
minLength: {
  value: 6,
  message: 'Must be 6 characters or longer'
}
})}
         name='password' type="text" id="password" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder="Password" />
       <label className="label">
{errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
{errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
</label>
      </div>
    </div>
  
    <input type='submit' class="w-56 mt-3 bg-gray-900 px-6 py-3 text-white transition hover:bg-gray-700"/>
</form>
    <p>Already Signup   <Link to="/signup">SignUp</Link></p>
<div class="divider">OR</div>
<div className='flex flex-col justify-center'>
  <button class="btn btn-outline my-3" onClick={() => signInWithGoogle()}>Continue with Google</button>
  <button class="btn btn-outline my-3" onClick={() => signInWithFacebook()}>Continue with Facebook</button>
  <button class="btn btn-outline my-3" onClick={() => handleResetPassword()}>Reset</button>
  {/* <button
  className='class="btn btn-outline"'
        onClick={async () => {
          const success = await sendPasswordResetEmail(
            email,
            actionCodeSettings
          );
          if (success) {
            alert('Sent email');
          }
        }}
      >
        Reset password
      </button> */}
</div>
  </div>
  </div>  
  <div className='my-6'>
           <Footer></Footer>
           </div>
        </div>
    );
}

export default Login;
