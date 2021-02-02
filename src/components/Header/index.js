import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom'
import { auth } from './../../firebase/utils';

// import Logo from './../../assets/pistacho.jpeg';

const Header = props => {
    const { currentUser } = props;
    return (
        <header className="header">
          <div className="wrap">
              <div className="logo">
                <Link to="/">
                  <h2>Pistacho</h2>
                </Link>
              </div>

              <div className="callToActions">

                {currentUser && (
                  <ul>
                    <li>
                      <span onClick={() => auth.signOut()}>
                        LogOut
                      </span>
                    </li>
                  </ul>
                )}

                {!currentUser && (
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
                )} 
              </div>
          </div>  
        </header>
    );
};

Header.defaultProps = {
  currentUser: null
}

export default Header;
