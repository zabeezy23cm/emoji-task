import React from 'react';
import '../styles/NavBar.css'

const NavBar = () => {
    return (
        <div className='navBar'>
            <div className='navBarElem'>Все</div>
            <div className='navBarElem'>Любимые</div>
            <div className='navBarElem'>Удаленные</div>
        </div>
    );
};

export default NavBar;