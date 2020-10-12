import React from 'react';
import style from './Cart.module.scss';
import { Button } from '../Common/FormsControls';
import { useDispatch } from 'react-redux';



const Cart = ({ closeCart, cart }) => {

    const removeAllGoods = useDispatch();
    const removeGoodsFromCart = useDispatch();

    const removeGood = (goodId) => {
        let goodIndex = cart.findIndex(({ id }) => id == goodId);
        removeGoodsFromCart({ type: 'DELETE_GOODS_FROM_CART', goodIndex })

    }
    const clearCart = () => {
        let cart = [];
        removeAllGoods({ type: 'REMOVE_ALL_GOODS', cart });
    }

    return (
        <div className={style.wrapper} >
            <div className={style.top}>
                <div>КОРЗИНА</div>
                <div className={style.close} onClick={closeCart}>&times;</div>
            </div>
            <ul className={style.goods_wrapper}>
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
                {cart.length === 0 ? <div>Корзина пуста</div> : <div>
                    <Button label='Оформить заказ' className={style.btn_offer} />
                    <Button label='Очистить корзину' onClick={() => clearCart()} className={style.btn_remove} />
                </div>}
            </ul>
            <div className={style.bottom}></div>
        </div>
    )
}


export default Cart;