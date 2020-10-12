import React from 'react';
import style from './FooterMenu.module.scss';
import { NavLink } from 'react-router-dom';

const FooterMenu = () =>{
    return(
        <nav className={style.menu}>
            <li><NavLink to="/store">Магазин</NavLink></li>
            <li><NavLink to="/brand">О бренде</NavLink></li>
            <li><NavLink to="/delivery">Доставка</NavLink></li>
            <li><NavLink to="/refund">Возврат</NavLink></li>
            <li><NavLink to="/contacts">Контакты</NavLink></li>
        </nav>
    )
}


export default FooterMenu;