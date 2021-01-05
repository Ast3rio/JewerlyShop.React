import React from 'react';
import style from './Sidebar.module.scss';
import { useSelector } from 'react-redux';
import { Button } from '../../Common/FormsControls';
import PriceFilter from './FilterComponents/PriceFilter';
import WidthFilter from './FilterComponents/WidthFilter';
import MaterialFilter from './FilterComponents/MaterialFilter';

const StoreFilter = () => {
    //State
    const minPrice = useSelector(state => state.filter.minPrice);
    const maxPrice = useSelector(state => state.filter.maxPrice);
    const widthBasis = useSelector(state => state.filter.widthBasis);
    const material = useSelector(state => state.filter.material);

    return (
        <div className={style.filter}>
            <h4>Фильтр товара</h4>
            <p>Цена:</p>
            <PriceFilter />
            <p>Ширина основы:</p>
            <WidthFilter />
            <p>Материал:</p>
            <MaterialFilter />
        </div>
    )
}

export default StoreFilter;