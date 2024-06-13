import React, {useState, useEffect} from 'react'
import { BiHome, BiMessage, BiSolidReport, BiTask, BiHelpCircle } from 'react-icons/bi'
import { CgProfile } from "react-icons/cg";
import './NavBar.css'
import mainLogo from '../../assets/deepdive_labs_logo.png'
import { Link } from 'react-router-dom';
import LoginRegister from '../LoginRegister/LoginRegister';


function NavBar() {
  //display login page or not
  const [showLogin, setShowLogin] = useState(false);
  //set user ID to handle actual login
  const [user, setUser] = useState(null);

  //Google Oauth storing user information inside localStorage
  useEffect(() => {
    // Check if user data exists in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = () => {
    setShowLogin(!showLogin);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('userEmail');
    // Google logout
    google.accounts.id.disableAutoSelect();
    google.accounts.id.revoke(localStorage.getItem('userEmail'), () => {
      console.log('consent revoked');
    });
  };
  
  return (
    <div className="menu">
      <box className = "logo-container">
        <div className="logo">
          <img src={mainLogo}></img>
          <h2>French Class</h2>
        </div>
      </box>

      <div className="menu--list">
        <Link to="/profile" className="item">
          <CgProfile className='icon'/>
          Profile
        </Link>
        <Link to="/" className="item">
          <BiHome className='icon'/>
          DashBoard
        </Link>
        <Link to="/lesson-plan" className="item">
          <BiTask className='icon'/>
          Lesson Planner
        </Link>
        <Link to="/report" className="item">
          <BiSolidReport className='icon'/>
          Report
        </Link>
        <Link to="/contact" className="item">
          <BiMessage className='icon'/>
          Contact
        </Link>
        <Link to="/help" className="item">
          <BiHelpCircle className='icon'/>
          Help
        </Link>
        <div className="user-info">
            {user ? (
                <>
                    <span>{user.name} is signed in</span>
                    <button onClick={handleLogout}>SignOut</button>
                </>
            ) : (
                <button onClick={handleLogin}>Login/SignUp</button>
            )}
        </div>
      </div>


      {showLogin && <LoginRegister onClose={closeLogin} setUser={setUser} />}
    </div>
  )
}

export default NavBar