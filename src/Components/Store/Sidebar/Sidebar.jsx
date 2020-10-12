import React from 'react';
import style from './Sidebar.module.scss';
import { Button } from '../../Common/FormsControls';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className={style.sidebar__wrapper}>
            <ul className={style.sidebar}>
                <li>
                    <NavLink activeClassName={style.active} to="/store/all">Все товары</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.active} to="/store/rings">Кольца</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.active} to="/store/shackles">Серьги</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.active} to="/store/bracelets">Браслеты</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.active} to="/store/men_jewelry">Мужские украшения</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.active} to="/store/women_jewelry">Женские украшения</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.active} to="/store/new">Новое</NavLink>
                </li>
            </ul>
            <div className={style.products__filter}>
                <h4>Фильтр товара</h4>
                <p>Цена:</p>
                <div className={style.products__filter__price}>
                    <input type="text" placeholder='0' />
                    <input type="text" placeholder='10000'/>
                </div>
                <p>Ширина основы:</p>
                <div className={style.products__filter__width}>
                    <input type="text" placeholder='--'/>
                </div>
                <p>Материал:</p>
                <div className={style.products__filter__material}>
                    <select name='material'>
                        <option value="------">------</option>
                        <option value="Дерево">Дерево</option>
                        <option value="Металл">Металл</option>
                        <option value="Красное дерево">Красное дерево</option>
                    </select>
                </div>
                <Button label='Подтвердить'/>
            </div>
        </div>
    )
}

export default Sidebar;