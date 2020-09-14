import React, { useState } from 'react';
import s from './Header.module.scss';
import logo from './../../assets/img/logo.png';
import Menu from './Menu/Menu';
import Cart from './Cart';
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from './MobileMenu/MobileMenu';


const Header = (props) => {

    const [cart, setCart] = useState(false);
    let openCart = () => {
        setCart(true);
    };
    let closeCart = () => {
        setCart(false);
    };
    const [search, setSearch] = useState(false);
    let openSearch = () => {
        setSearch(true);
    };
    let closeSearch = () => {
        setSearch(false);
    };

    const [mobileMenu, setMobileMenu] = useState(false);

    let openMobileMenu = () => {
        setMobileMenu(true);
    };

    let closeMobileMenu = () => {
        setMobileMenu(false);
    };

    return (
        <header className={s.header + ' ' + 'container'}>
            <div className={s.top}>
                <FontAwesomeIcon className={s.search + ' ' + s.icon_style} onClick={openSearch} icon={faSearch} />
                <div className={s.cart__wrapper}>
                    <div className={s.cart__number}>{props.cart.length}</div>
                    <FontAwesomeIcon className={s.cart + ' ' + s.icon_style} onClick={openCart} icon={faShoppingCart} />
                </div>
                <div className={s.mobile_menu} onClick={mobileMenu ? closeMobileMenu : openMobileMenu}>
                    <div className={s.hamburger + ' ' + (mobileMenu ? s.active_menu : null)} ></div>
                    <div className={s.close_hamburger + ' ' + (mobileMenu ? s.deactive_menu : null)} ></div>
                </div>
                {mobileMenu && <MobileMenu closeMobileMenu={closeMobileMenu} />}
                {cart && <Cart cart={props.cart} removeGoodsFromCart={props.removeGoodsFromCart} closeCart={closeCart} removeAllGoods={props.removeAllGoods}/>}
                {search && <Search closeSearch={closeSearch} />}
            </div>
            <img src={logo} alt='logo' />
            <Menu />
        </header>
    )
}


export default Header;