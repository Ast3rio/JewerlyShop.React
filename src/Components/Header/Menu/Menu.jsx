import React from 'react';
import s from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

const Menu = () =>{
    return(
        <nav className={s.menu}>
            <li><NavLink to="/main" activeClassName={s.active}>Главная</NavLink></li>
            <li><NavLink to="/store" activeClassName={s.active}>Магазин</NavLink></li>
            <li><NavLink to="/brand" activeClassName={s.active}>О бренде</NavLink></li>
            <li><NavLink to="/delivery" activeClassName={s.active}>Доставка</NavLink></li>
            <li><NavLink to="/refund" activeClassName={s.active}>Возврат</NavLink></li>
            <li><NavLink to="/contacts" activeClassName={s.active}>Контакты</NavLink></li>
        </nav>
    )
}


export default Menu;