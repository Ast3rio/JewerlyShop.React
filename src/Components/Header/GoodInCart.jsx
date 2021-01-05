import React from 'react';
import style from './Cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Common/FormsControls';

const GoodInCart = () => {

    const cart = useSelector(state => state.cart.cart);

    const removeGoodsFromCart = useDispatch();
    //Remove good from bucket
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
                            <li>Количество: {good.count}</li>
                            <li>Сума к оплате: {good.price * good.count + ' $'}</li>
                        </ul>
                        <Button label={'Удалить'} onClick={() => removeGood(good.id)} className={style.cart_btn} />
                    </div>
                </li>
            )}
        </>
    )
}

export default GoodInCart;