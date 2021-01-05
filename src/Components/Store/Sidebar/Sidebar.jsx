import React from 'react';
import style from './Sidebar.module.scss';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GOODS_TYPES } from '../../../Redux/store-reducer';
import StoreFilter from './StoreFilter';

const Sidebar = () => {

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
            <StoreFilter />
        </div>
    )
}

export default Sidebar;