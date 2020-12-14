import React from 'react';
import style from './AdminPage.module.scss';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <nav className={style.menu}>
            <li><NavLink className={style.link} activeClassName={style.active} to="/admin/subs">Подписчики</NavLink></li>
            <li><NavLink className={style.link} activeClassName={style.active} to="/admin/messages">Сообщения</NavLink></li>
            <li><NavLink className={style.link} activeClassName={style.active} to="/admin/orders">Заказы</NavLink></li>
            <li><NavLink className={style.link} activeClassName={style.active} to="/admin/control">Контроль сайтом</NavLink></li>
        </nav>
    )
}

export default AdminMenu;