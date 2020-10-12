import React from 'react';
import style from './GoodsAmount.module.scss';


const GoodsAmount = ({id, sumprice, upSumprice, downSumprice}) => {
    return (
        <div className={style.control__wrapper}>
            <div className={style.control__btn + ' ' + style.control__btn__minus}
                onClick={() => downSumprice(id, sumprice > 1 ? sumprice - 1 : sumprice = 1)}></div>
            <div className={style.calc}>{sumprice}</div>
            <div className={style.control__btn + ' ' + style.control__btn__plus}
                onClick={() => upSumprice(id, sumprice < 10 ? sumprice + 1 : sumprice = 10)}></div>
        </div>
    )
}

export default GoodsAmount;