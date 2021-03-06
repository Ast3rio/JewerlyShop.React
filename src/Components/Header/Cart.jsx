import React from 'react';
import style from './Cart.module.scss';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import GoodInCart from './GoodInCart';
import { Button } from '../Common/FormsControls';

const Cart = ({ closeCart, cart }) => {

    const removeAllGoods = useDispatch();
    //Clear bucket set empty arr
    const clearCart = () => {
        let cart = [];
        removeAllGoods({ type: 'REMOVE_ALL_GOODS', cart });
    };
    //Close bucket with target
    const targetCloseCart = (e) => {
        if (e.target === e.currentTarget) {
            closeCart();
        }
    };

    return (
        <section className={style.cart_wrapper} onClick={targetCloseCart}>
            <div className={style.wrapper} >
                <div className={style.top}>
                    <div>КОРЗИНА</div>
                    <div className={style.close} onClick={closeCart}>&times;</div>
                </div>
                <ul className={style.goods_wrapper}>
                    <GoodInCart />
                    {cart.length === 0 ? <div>Корзина пуста</div> : <div>
                        <NavLink to="/order" className={style.btn_offer} onClick={closeCart}>Оформить заказ</NavLink>
                        <Button label='Очистить корзину' onClick={clearCart} className={style.btn_remove} />
                    </div>}
                </ul>
                <div className={style.bottom}></div>
            </div>
        </section>
    )
}

export default Cart;