import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './../Sidebar.module.scss';

const WidthFilter = () => {

    const widthBasis = useSelector(state => state.filter.widthBasis);

    const setWidthBasis = useDispatch();

    const handleWidthBasis = (e) => {
        let setValue = e.target.value;
        setWidthBasis({ type: 'SET_WIDTH_BASIS', setValue });
    }

    return (
        <div className={style.filter__width}>
            <select name='baseline' value={widthBasis} onChange={handleWidthBasis}>
                <option value="-----">------</option>
                <option value="6">6мм</option>
                <option value="8">8мм</option>
                <option value="10">10мм</option>
                <option value="12">12мм</option>
            </select>
        </div>
    )
}

export default WidthFilter;