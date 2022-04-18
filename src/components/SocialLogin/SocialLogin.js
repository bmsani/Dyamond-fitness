import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import GoogleIcon from '../../images/Social-icon/search.png'
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if(user){
        navigate(from);
    }

    if(loading){
        return <Loading></Loading>
    }
    if(error){
        toast(error.message)
    }

    return (
        <div>
            <button className='w-50 mx-auto d-block btn btn-dark fw-bold' onClick={() => signInWithGoogle()}>
            <img className='pe-2' style={{height: '30px'}} src={GoogleIcon} alt="" />
            Sign in with Google</button>
        </div>
    );
};

export default SocialLogin;