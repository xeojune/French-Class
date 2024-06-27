import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Background.css'
import CoverImage from '../assets/background2.png'
import LoginRegister from '../components/LoginRegister/LoginRegister';

function Background() {
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        setShowLogin(true);
      };
    
    const closeLogin = () => {
    setShowLogin(false);
    };

    const setUser = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('userEmail', user.email);
        navigate('/home');
    };

    return (
        <div className='background'>
            <div className='left-panel'>
                <div className='title'>
                    <h1>French Class - DeepDiveLabs</h1>
                </div>
                <img src={CoverImage} className='background-image'/>
            </div>

            <div className='right-panel'>
                <div className='title'>
                    <h1>Login or SignUp to Access</h1>
                </div>
                <button onClick={handleLogin}>Login/SignUp</button>
            </div>
            {showLogin && <LoginRegister onClose={closeLogin} setUser={setUser} />}
        </div>
    )
    }

export default Background