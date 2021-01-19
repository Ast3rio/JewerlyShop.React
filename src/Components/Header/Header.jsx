import React, { useState } from 'react';
import style from './Header.module.scss';
import Menu from './Menu/Menu';
import Cart from './Cart';
import MobileMenu from './MobileMenu/MobileMenu';
import Logo from './HeaderComponents/Logo';
import Search from './HeaderComponents/Search';
import Bucket from './HeaderComponents/Bucket';
import LogIn from './HeaderComponents/LogIn';
import Hamburger from './HeaderComponents/Hamburger';
import Auth from './Auth';
import { useSelector } from 'react-redux';

const Header = () => {

    const cart = useSelector(state => state.cart.cart);

    const [cartWindow, setCartWindow] = useState(false);
    const openCartWindow = () => {
        setCartWindow(true);
    };
    const closeCartWindow = () => {
        setCartWindow(false);
    };

    const [mobileMenu, setMobileMenu] = useState(false);
    const openMobileMenu = () => {
        setMobileMenu(true);
    };
    const closeMobileMenu = () => {
        setMobileMenu(false);
    };

    const [authWindow, setAuthWindow] = useState(false);
    const openAuthWindow = () => {
        setAuthWindow(true);
    };
    const closeAuthWindow = () => {
        setAuthWindow(false);
    };
    
    return (
        <header className={style.header + ' ' + 'container'}>
            <div className={style.top}>
                <Logo />
                <div className={style.top_center}>
                    <Search />
                    <Bucket openCart={openCartWindow} cart={cart} />
                </div>
                <LogIn openAuth={openAuthWindow} />
                <Hamburger mobileMenu={mobileMenu} openMobileMenu={openMobileMenu} closeMobileMenu={closeMobileMenu} />
                {mobileMenu && <MobileMenu closeMobileMenu={closeMobileMenu} />}
            </div>
            {cartWindow && <Cart cart={cart} closeCart={closeCartWindow} />}
            {authWindow && <Auth closeAuth={closeAuthWindow}/>}
            <Menu />
        </header>
    )
}

export default Header;