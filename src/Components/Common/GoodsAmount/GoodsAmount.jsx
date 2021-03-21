import React from 'react';
import style from './GoodsAmount.module.scss';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';


const GoodsAmount = ({ id, count = 1 }) => {

    const upGoodsCount = useDispatch();
    const downGoodsCount = useDispatch();

    const downGoodCount = () => {
        count = count > 1 ? count - 1 : count = 1;
        downGoodsCount({ type: 'DOWN_GOODS_COUNT', id, count });
    };

    const upGoodCount = () => {
        count = count < 10 ? count + 1 : count = 10;
        upGoodsCount({ type: 'UP_GOODS_COUNT', id, count })
    };
    
    return (
        <div className={style.wrapper}>
            <div className={style.btn__minus}
                onClick={downGoodCount}></div>
            <div className={style.calc}>{count}</div>
            <div className={style.btn__plus}
                onClick={upGoodCount}></div>
        </div>
    )
}

GoodsAmount.propTypes = {
    id: PropTypes.number,
    count: PropTypes.number
}

export default GoodsAmount;