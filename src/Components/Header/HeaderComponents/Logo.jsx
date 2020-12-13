import React from 'react';
import style from './../Header.module.scss';
import { NavLink } from 'react-router-dom';
import logo from './../../../Assets/Img/logo.png';

const Logo = () => {
    return (
        <NavLink to='/main'>
            <img className={style.logo} src={logo} alt='logo' />
        </NavLink>
    )
}

export default Logo;