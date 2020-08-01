import React from 'react';
import s from './Sidebar.module.scss';
import { Button } from '../../Common/FormsControls';

const Sidebar = () => {
    return (
        <div className={s.sidebar__wrapper}>
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
            <div className={s.products__filter}>
                <h4>Фильтр товара</h4>
                <p>Цена:</p>
                <div className={s.products__filter__price}>
                    <input type="text" placeholder='0'/>
                    <input type="text" placeholder='10000'/>
                    <Button label='Подтвердить'/>
                </div>
                <p>Ширина основы:</p>
                <div className={s.products__filter__width}>
                    <input type="text" placeholder='--'/>
                    <Button label='Подтвердить'/>
                </div>
                <p>Материал:</p>
                <div className={s.products__filter__material}>
                    <select name='material'>
                        <option value="------">------</option>
                        <option value="Дерево">Дерево</option>
                        <option value="Металл">Металл</option>
                        <option value="Красное дерево">Красное дерево</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;