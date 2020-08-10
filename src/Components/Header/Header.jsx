import React, { useState } from 'react';
import s from './Header.module.scss';
import logo from './../../assets/img/logo.png';
import Menu from './Menu/Menu';
import Cart from './Cart';
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';


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

    return (
        <header className={s.header + ' ' + 'container'}>
            <div className={s.top}>
                <FontAwesomeIcon className={s.search + ' ' + s.icon_style} onClick={openSearch} icon={faSearch} />
                <div className={s.cart__wrapper}>
                    <div className={s.cart__number}>{props.cart.length}</div>
                    <FontAwesomeIcon className={s.cart + ' ' + s.icon_style} onClick={openCart} icon={faShoppingCart} />
                </div>
                {cart && <Cart cart={props.cart} closeCart={closeCart}/>}
                {search && <Search closeSearch={closeSearch} />}
            </div>
            <img src={logo} alt='logo' />
            <Menu />
        </header>
    )
}


export default Header;