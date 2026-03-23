import React from 'react';

const Header = ({ isLoggedIn }) => {
    return (
        <header>
            <div className="logo">
                    {/* <img className="logo-icon" src={require('./logo.png')} alt='Before You Go Logo' /> */}
                    <h1 className="logo-text">SwiftyIndie</h1>
                </div>
        </header>
    );
}

export default Header;