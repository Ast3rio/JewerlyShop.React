import React from 'react';
import style from './Sidebar.module.scss';
import PriceFilter from './FilterComponents/PriceFilter';
import WidthFilter from './FilterComponents/WidthFilter';
import MaterialFilter from './FilterComponents/MaterialFilter';

const StoreFilter = () => {

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