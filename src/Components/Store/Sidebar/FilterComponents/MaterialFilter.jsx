import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './../Sidebar.module.scss';

const MaterialFilter = () => {

    const material = useSelector(state => state.filter.material);

    const setMaterial = useDispatch();
    
    const handleMaterial = (e) => {
        let setValue = e.target.value;
        setMaterial({ type: 'SET_MATERIAL', setValue });
    }

    return (
        <div className={style.filter__material} onChange={handleMaterial}>
            <select name='material' value={material}>
                <option value="------">------</option>
                <option value="wood">Дерево</option>
                <option value="metal">Металл</option>
                <option value="красное дерево">Красное дерево</option>
            </select>
        </div>
    )
}

export default MaterialFilter;