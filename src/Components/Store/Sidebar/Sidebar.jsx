import React from 'react';
import s from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <ul className={s.sidebar}>
            <li>
                <a href="#">Все товары</a>
            </li>
            <li>
                <a href="#">Кольца</a>
            </li>
            <li>
                <a href="#">Серьги</a>
            </li>
            <li>
                <a href="#">Браслеты</a>
            </li>
            <li>
                <a href="#">Мужские украшения</a>
            </li>
            <li>
                <a href="#">Женские украшения</a>
            </li>
            <li>
                <a href="#">Новое</a>
            </li>
        </ul>
    )
}

export default Sidebar;