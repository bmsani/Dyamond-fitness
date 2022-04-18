import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleIcon from '../../images/Social-icon/search.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <button className='w-50 mx-auto d-block btn btn-dark fw-bold' onClick={() => signInWithGoogle()}>
            <img className='pe-2' style={{height: '30px'}} src={GoogleIcon} alt="" />
            Sign in with Google</button>
        </div>
    );
};

export default SocialLogin;