import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './../Sidebar.module.scss';

const PriceFilter = () => {

    const minPrice = useSelector(state => state.filter.minPrice);
    const maxPrice = useSelector(state => state.filter.maxPrice);

    const setMinPrice = useDispatch();
    const setMaxPrice = useDispatch();

    const handleMinPrice = (e) => {
        let minPrice = e.target.value;
        setMinPrice({ type: 'SET_MIN_PRICE', minPrice });
    }

    const handleMaxPrice = (e) => {
        let maxPrice = e.target.value;
        setMaxPrice({ type: 'SET_MAX_PRICE', maxPrice });
    }

    return (
        <div className={style.filter__price}>
            <input type="text" placeholder={minPrice} onChange={handleMinPrice} />
            <input type="text" placeholder={maxPrice} onChange={handleMaxPrice} />
        </div>
    )
}

export default PriceFilter;