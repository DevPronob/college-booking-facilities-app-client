import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../src/Firebase/Firebase.init';
// import LoadingSpinner from '../../Shared/LoadingSpinner';

const PrivateAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth)
    const location = useLocation();

    if(loading){
        return <div class="h-screen bg-white">
            <div class="flex justify-center items-center h-full">
              <img class="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt=""/>
            </div>
            </div>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};



export default PrivateAuth;