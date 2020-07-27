import React, { useState } from 'react';
import s from './Header.module.scss';
import logo from './../../assets/img/logo.png';
import Menu from './Menu/Menu';
import Cart from './Cart';
import Search from './Search';




const Header = (props) => {
    
    const [cart, setCart] = useState(false);
    let openCart = () =>{
        setCart(true);
    };
    let closeCart = () =>{
        setCart(false);
    };
    const [search, setSearch] = useState(false);
    let openSearch = () =>{
        setSearch(true);
    };
    let closeSearch = () =>{
        setSearch(false);
    };


    return (
        <header className={s.header}>
            <div className={s.top}>
                <div className={s.search} onClick={openSearch} ></div>
                <div className={s.cart} onClick={openCart}></div>
                {cart && <Cart card={props.card} closeCart={closeCart} deleteFromCart={props.deleteFromCart}/>}
                {search && <Search closeSearch={closeSearch}/>}
            </div>
            <img src={logo} alt='logo' />
            <Menu />
        </header>
    )
}


export default Header;