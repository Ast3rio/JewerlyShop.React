import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './../Sidebar.module.scss';

const MaterialFilter = () => {

    const goodMaterial = useSelector(state => state.filter.goodMaterial);

    const setMaterial = useDispatch();
    
    const handleMaterial = (e) => {
        let material = e.target.value;
        setMaterial({ type: 'SET_MATERIAL', material });
    }

    return (
        <div className={style.filter__material} onChange={handleMaterial}>
            <select name='material' value={goodMaterial}>
                <option value="-----">-----</option>
                <option value="wood">Дерево</option>
                <option value="metal">Металл</option>
                <option value="красное дерево">Красное дерево</option>
            </select>
        </div>
    )
}

export default MaterialFilter;