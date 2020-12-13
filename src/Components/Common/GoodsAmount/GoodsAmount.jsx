import React from 'react';
import style from './GoodsAmount.module.scss';
//Import modules
import { useDispatch } from 'react-redux';


const GoodsAmount = ({ id, sumprice }) => {
    //Dispatches
    const upSumprice = useDispatch();
    const downSumprice = useDispatch();

    //Down count goods
    const downGoodSumprice = () => {
        sumprice = sumprice > 1 ? sumprice - 1 : sumprice = 1;
        downSumprice({ type: 'DOWN_SUMPRICE', id, sumprice });
    };
    //Up count goods
    const upGoodSumprice = () => {
        sumprice = sumprice < 10 ? sumprice + 1 : sumprice = 10;
        upSumprice({ type: 'UP_SUMPRICE', id, sumprice })
    };
    
    return (
        <div className={style.wrapper}>
            <div className={style.btn + ' ' + style.minus}
                onClick={downGoodSumprice}></div>
            <div className={style.calc}>{sumprice}</div>
            <div className={style.btn + ' ' + style.plus}
                onClick={upGoodSumprice}></div>
        </div>
    )
}

export default GoodsAmount;