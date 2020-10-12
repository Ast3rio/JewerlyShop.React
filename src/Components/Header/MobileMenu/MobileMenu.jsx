import React from 'react';
import style from './MobileMenu.module.scss';
import { NavLink } from 'react-router-dom';

const MobileMenu = () =>{
    return(
        <nav className={style.menu}>
            <li><NavLink to="/main" activeClassName={style.active}>Главная</NavLink></li>
            <li><NavLink to="/store" activeClassName={style.active}>Магазин</NavLink></li>
            <li><NavLink to="/brand" activeClassName={style.active}>О бренде</NavLink></li>
            <li><NavLink to="/delivery" activeClassName={style.active}>Доставка</NavLink></li>
            <li><NavLink to="/refund" activeClassName={style.active}>Возврат</NavLink></li>
            <li><NavLink to="/contacts" activeClassName={style.active}>Контакты</NavLink></li>
        </nav>
    )
}


export default MobileMenu;