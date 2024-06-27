import React, { useEffect, useRef, useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { jwtDecode } from 'jwt-decode';

function LoginRegister({ onClose, setUser }) {
    const [isRegistering, setIsRegistering] = useState(false);
    const modalRef = useRef(null);
    const googleButtonRef = useRef(null);

    const handleCallbackResponse = (response) => {
        console.log('Encoded JWT ID token: ' + response.credential);
        let userObject = jwtDecode(response.credential);
        setUser(userObject); // Update user state in NavBar
        localStorage.setItem('user', JSON.stringify(userObject));
        localStorage.setItem('userEmail', userObject.email); // Store email for Google revoke
        onClose(); // Close the login/register modal
    };

    function registerLink() {
        setIsRegistering(true);
    }

    function loginLink() {
        setIsRegistering(false);
    }

    function handleLogin(event) {
        event.preventDefault();
    }

    useEffect(() => {
        if (googleButtonRef.current) {
            google.accounts.id.initialize({
                client_id: "",
                callback: handleCallbackResponse
            });

            google.accounts.id.renderButton(googleButtonRef.current, {
                theme: 'outline',
                size: 'large'
            });
        }
    }, []);

    return (
        <div className="wrapper" ref={modalRef} onClick={onClose}>
            <div className={`form-box login ${isRegistering ? 'hidden' : ''}`} onClick={(e) => e.stopPropagation()}>
                <form onSubmit={handleLogin}>
                    <h1>Sign into Bonjourno</h1>

                    <div className="input-box">
                        <input type='text' placeholder='Username' required />
                        <FaUser className='icon'/>
                    </div>

                    <div className="input-box">
                        <input type='password' placeholder='Password' required />
                        <FaLock className='icon'/>
                    </div>

                    <div className="remember-forgot">
                        <label>
                            <input type='checkbox'/>
                            Remember me
                        </label>
                        <a href='#'>Forgot Password?</a>
                    </div>

                    <button type='submit'>Login</button>

                    <div ref={googleButtonRef} id="signInDiv"></div>
                    
                    <div className="register-link">
                        <p>
                            Don't have an account? 
                            <a href='#' onClick={registerLink}>Register</a>
                        </p>
                    </div>
                </form>
            </div>

            <div className={`form-box register ${isRegistering ? '' : 'hidden'}`} onClick={(e) => e.stopPropagation()}>
                <form action="">
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type='text' placeholder='Username' required />
                        <FaUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type='email' placeholder='Email' required />
                        <MdEmail className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type='password' placeholder='Password' required />
                        <FaLock className='icon'/>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type='checkbox'/>
                            I agree to the terms & conditions
                        </label>
                    </div>
                    <button type='submit'>Register</button>
                    <div className="register-link">
                        <p>
                            Already have an account? 
                            <a href='#' onClick={loginLink}>Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginRegister;
