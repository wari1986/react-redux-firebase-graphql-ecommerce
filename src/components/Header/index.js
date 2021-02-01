import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

// import Logo from './../../assets/pistacho.jpeg';

const Header = props => {
    return (
        <header className="header">
          <div className="wrap">
              <div className="logo">
                <Link to="/">
                  {/* <img src={Logo} alt=""/>  */}
                </Link>
              </div>

              <div className="callToActions">
                <ul>
                  <li>
                    <Link to="/registration">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
          </div>  
        </header>
    );
};

export default Header;
