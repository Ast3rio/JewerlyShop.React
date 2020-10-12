import React, { useState } from 'react';
import style from './Header.module.scss';
import logo from './../../Assets/Img/logo.png';
import Menu from './Menu/Menu';
import Cart from './Cart';
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from './MobileMenu/MobileMenu';
import { useSelector } from 'react-redux';


const Header = () => {

    const cart = useSelector(state => state.cart.cart);

    const [cartWindow, setCartWindow] = useState(false);
    let openCartWindow = () => {
        setCartWindow(true);
    };
    let closeCartWindow = () => {
        setCartWindow(false);
    };
    const [searchWindow, setSearchWindow] = useState(false);
    let openSearchWindow = () => {
        setSearchWindow(true);
    };
    let closeSearchWindow = () => {
        setSearchWindow(false);
    };

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
                <FontAwesomeIcon className={style.search + ' ' + style.icon_style} onClick={openSearchWindow} icon={faSearch} />
                <div className={style.cart__wrapper}>
                    <div className={style.cart__number}>{cart.length}</div>
                    <FontAwesomeIcon className={style.cart + ' ' + style.icon_style} onClick={openCartWindow} icon={faShoppingCart} />
                </div>
                <div className={style.mobile_menu} onClick={mobileMenu ? closeMobileMenu : openMobileMenu}>
                    <div className={style.hamburger + ' ' + (mobileMenu ? style.active_menu : null)} ></div>
                    <div className={style.close_hamburger + ' ' + (mobileMenu ? style.deactive_menu : null)} ></div>
                </div>
                {mobileMenu && <MobileMenu closeMobileMenu={closeMobileMenu} />}
                {cartWindow && <Cart cart={cart} closeCart={closeCartWindow} />}
                {searchWindow && <Search closeSearch={closeSearchWindow} />}
            </div>
            <img src={logo} alt='logo' />
            <Menu />
        </header>
    )
}


export default Header;