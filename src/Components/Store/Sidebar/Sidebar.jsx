import React from 'react';
import style from './Sidebar.module.scss';
import { Button } from '../../Common/FormsControls';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GOODS_TYPES } from '../../../Redux/store-reducer';

const Sidebar = () => {

    const minPrice = useSelector(state => state.storePage.minPrice);
    const maxPrice = useSelector(state => state.storePage.maxPrice);

    const setGoodsType = useDispatch();

    const setType = (goodsType) => setGoodsType({ type: 'SET_GOODS_TYPE', goodsType });

    return (
        <div className={style.sidebar__wrapper}>
            <ul className={style.sidebar}>
                <li>
                    <NavLink activeClassName={style.active} to='/store/all' onClick={() => setType(null)}>Все товары</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.active} to={`/store/${GOODS_TYPES.RING}`} onClick={() => setType(GOODS_TYPES.RING)}>Кольца</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.active} to={`/store/${GOODS_TYPES.SHACKLE}`} onClick={() => setType(GOODS_TYPES.SHACKLE)}>Серьги</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.active} to={`/store/${GOODS_TYPES.BRACELET}`} onClick={() => setType(GOODS_TYPES.BRACELET)}>Браслеты</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.active} to={`/store/${GOODS_TYPES.MAN_JEWELRY}`} onClick={() => setType(GOODS_TYPES.MAN_JEWELRY)}>Мужские украшения</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.active} to={`/store/${GOODS_TYPES.WOMAN_JEWELRY}`} onClick={() => setType(GOODS_TYPES.WOMAN_JEWELRY)}>Женские украшения</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.active} to={`/store/${GOODS_TYPES.NEW}`} onClick={() => setType(GOODS_TYPES.NEW)}>Новое</NavLink>
                </li>
            </ul>
            <div className={style.products__filter}>
                <h4>Фильтр товара</h4>
                <p>Цена:</p>
                <div className={style.products__filter__price}>
                    <input type="text" value={minPrice} />
                    <input type="text" value={maxPrice} />
                </div>
                <p>Ширина основы:</p>
                <div className={style.products__filter__width}>
                    <select name='baseline'>
                        <option value="-----">------</option>
                        <option value="6мм">6мм</option>
                        <option value="8мм">8мм</option>
                        <option value="10мм">10мм</option>
                        <option value="12мм">12мм</option>
                    </select>
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
                <Button className={style.filter_btn} label='Применить' />
            </div>
        </div>
    )
}

export default Sidebar;