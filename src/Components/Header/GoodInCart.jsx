import React from 'react';
import style from './Cart.module.scss';
//Import modules
import { useDispatch, useSelector } from 'react-redux';
//Import components
import { Button } from '../Common/FormsControls';

const GoodInCart = () => {
    //State
    const cart = useSelector(state => state.cart.cart);
    //Dispatches
    const removeGoodsFromCart = useDispatch();
    //Remove good from backet
    const removeGood = (goodId) => {
        let goodIndex = cart.findIndex(({ id }) => id == goodId);
        removeGoodsFromCart({ type: 'DELETE_GOODS_FROM_CART', goodIndex })
    }
    
    return (
        <>
            {cart.map(good =>
                <li key={good.id} className={style.card_list}>
                    <div className={style.cart_img}></div>
                    <div className={style.card_info}>
                        <h3 className={style.cart_title}>{good.title}</h3>
                        <ul className={style.cart_list}>
                            <li>Цена товара: {good.price + ' $'} </li>
                            <li>Количество: {good.sumprice}</li>
                            <li>Сума к оплате: {good.price * good.sumprice + ' $'}</li>
                        </ul>
                        <Button label={'Удалить'} onClick={() => removeGood(good.id)} className={style.cart_btn} />
                    </div>
                </li>
            )}
        </>
    )
}

export default GoodInCart;