import React from 'react';
import s from './Header.module.scss';
import logo from './Logo/logo.png';
import Menu from './Menu/Menu';

const Header = () =>{
    return(
        <header className={s.header}>
            <img src={logo} alt='logo'/>
            <Menu />
        </header>
    )
}


export default Header;