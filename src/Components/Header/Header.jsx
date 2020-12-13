import React, { useState } from 'react';
import style from './Header.module.scss';
//Import Components 
import Menu from './Menu/Menu';
import Cart from './Cart';
import MobileMenu from './MobileMenu/MobileMenu';
import Logo from './HeaderComponents/Logo';
import Search from './HeaderComponents/Search';
import Bucket from './HeaderComponents/Bucket';
import LogIn from './HeaderComponents/LogIn';
import Hamburger from './HeaderComponents/Hamburger';
//Imports Modules
import { useSelector } from 'react-redux';



const Header = () => {
    //State
    const cart = useSelector(state => state.cart.cart);

    //Open & close for backet
    const [cartWindow, setCartWindow] = useState(false);
    let openCartWindow = () => {
        setCartWindow(true);
    };
    let closeCartWindow = () => {
        setCartWindow(false);
    };
    //Open & close mobile window
    const [mobileMenu, setMobileMenu] = useState(false);
    let openMobileMenu = () => {
        setMobileMenu(true);
    };
    let closeMobileMenu = () => {
        setMobileMenu(false);
    };

    return (
        <header className={style.header + ' ' + 'container'}>
            <div className={style.top}>
                <Logo />
                <Search />
                <Bucket openCart={openCartWindow} cart={cart} />
                <LogIn />
                <Hamburger mobileMenu={mobileMenu} openMobileMenu={openMobileMenu} closeMobileMenu={closeMobileMenu} />
                {mobileMenu && <MobileMenu closeMobileMenu={closeMobileMenu} />}
            </div>
            {cartWindow && <Cart cart={cart} closeCart={closeCartWindow} />}
            <Menu />
        </header>
    )
}


export default Header;