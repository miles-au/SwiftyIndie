import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Header = ({ isLoggedIn }) => {
    return (
        <header>
            <div className="logo">
                    <img className="logo-icon" src={require('./logo.png')} alt='Before You Go Logo' />
                    <h1 className="logo-text">BeforeYouGo</h1>
                </div>
        </header>
    );
}

export default Header;