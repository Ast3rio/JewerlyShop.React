import React from 'react';
import s from './Header.module.scss';
import logo from './../../assets/img/logo.png';
import Menu from './Menu/Menu';
import Cart from './Cart/Cart';
import { NavLink, Route } from 'react-router-dom';


const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.top}>
                <a href="#" className={s.search}>
                </a>
                <NavLink to='/main/cart' activeClassName={s.active} className={s.cart}></NavLink>
                <Route path='/main/cart' component={Cart} />
            </div>
            <img src={logo} alt='logo' />
            <Menu />
        </header>
    )
}


export default Header;