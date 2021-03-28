import React from 'react';
import style from './Card.module.scss';
import { Button } from '../../Common/FormsControls';
import GoodsAmount from '../../Common/GoodsAmount/GoodsAmount';
import { useSelector } from 'react-redux';

const CardFunctional = ({ addGoodsToCart, good}) => {

    const cart = useSelector(state => state.cart.cart);
    
    const {id, title, price, status, count, width, material} = good;

    const addGood = (e) => {
        e.preventDefault();
        const addGood = cart.concat({ id: id, title: title, price: price, count: count });
        addGoodsToCart({ type: 'ADD_GOODS_TO_CART' , addGood});
        good.count = 1;
    }

    return (
        <div>
            <h6 className={style.card_title}>{title}</h6>
            <div className={style.top}>
                <div className={style.price}>{price + ' $'}</div>
                {status === 'есть в наличии' ? <div className={style.status + ' ' + style.green}>{status}</div>
                    : <div className={style.status}>{status}</div>}
            </div>
            <ul className={style.bottom}>
                <li>Ширина основы: {width}</li>
                <li>Материал: {material}</li>
            </ul>
            <div className={style.control}>
                <GoodsAmount id={id} count={count} />
                <Button label={'В корзину'}
                    onClick={addGood}
                    className={style.card_btn} />
            </div>
        </div>
    )
}


export default CardFunctional;