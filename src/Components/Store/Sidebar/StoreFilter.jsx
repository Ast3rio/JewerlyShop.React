import React from 'react';
import style from './Sidebar.module.scss';
import PriceFilter from './FilterComponents/PriceFilter';
import WidthFilter from './FilterComponents/WidthFilter';
import MaterialFilter from './FilterComponents/MaterialFilter';
import { Button } from '../../Common/FormsControls';
import { useDispatch, useSelector } from 'react-redux';

const StoreFilter = () => {

    const minPrice = useSelector(state => state.filter.minPrice),
        maxPrice = useSelector(state => state.filter.maxPrice),
        widthBasis = useSelector(state => state.filter.widthBasis),
        goodMaterial = useSelector(state => state.filter.goodMaterial);

    const setWidthBasis = useDispatch();
    const setMaterial = useDispatch();
    const setMinPrice = useDispatch();
    const setMaxPrice = useDispatch();

    const clearFilter = () => {
        let maxPrice = 10000;
        let minPrice = 0;
        let width = '-----';
        let material = '-----';
        setWidthBasis({ type: 'SET_WIDTH_BASIS', width });
        setMinPrice({ type: 'SET_MIN_PRICE', minPrice });
        setMaxPrice({ type: 'SET_MAX_PRICE', maxPrice });
        setMaterial({ type: 'SET_MATERIAL', material });
    }

    return (
        <div className={style.filter}>
            <h4>Фильтр товара</h4>
            <p>Цена:</p>
            <PriceFilter />
            <p>Ширина основы:</p>
            <WidthFilter />
            <p>Материал:</p>
            <MaterialFilter />
            <Button label="Сбросить" onClick={clearFilter} />
            { console.log(minPrice) }
            { console.log(maxPrice) }
            { console.log(widthBasis) }
            { console.log(goodMaterial) }
        </div>
    )
}

export default StoreFilter;