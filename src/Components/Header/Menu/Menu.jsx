import React from 'react';
import style from './Menu.module.scss';
//Import modules
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Menu = () => {

    const admin = useSelector(state => state.admin.admin);

    return (
        <nav className={style.menu}>
            <li><NavLink to="/main" activeClassName={style.active}>Главная</NavLink></li>
            <li><NavLink to="/store" activeClassName={style.active}>Магазин</NavLink></li>
            <li><NavLink to="/brand" activeClassName={style.active}>О бренде</NavLink></li>
            <li><NavLink to="/delivery" activeClassName={style.active}>Доставка</NavLink></li>
            <li><NavLink to="/refund" activeClassName={style.active}>Возврат</NavLink></li>
            <li><NavLink to="/contacts" activeClassName={style.active}>Контакты</NavLink></li>
            {admin ? <li><NavLink to="/admin" activeClassName={style.active}>Админ панель</NavLink></li> : ''}
        </nav>
    )
}


export default Menu;