import React from 'react';
import s from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <ul className={s.sidebar}>
            <li>
                <a href="#top">Все товары</a>
            </li>
            <li>
                <a href="#top">Кольца</a>
            </li>
            <li>
                <a href="#top">Серьги</a>
            </li>
            <li>
                <a href="#top">Браслеты</a>
            </li>
            <li>
                <a href="#top">Мужские украшения</a>
            </li>
            <li>
                <a href="#top">Женские украшения</a>
            </li>
            <li>
                <a href="#top">Новое</a>
            </li>
        </ul>
    )
}

export default Sidebar;