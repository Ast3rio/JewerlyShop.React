import React from 'react';
import s from './Cart.module.scss';
import { Button } from '../Common/FormsControls';


const Cart = ({ closeCart, removeGoodsFromCart, removeAllGoods, ...props }) => {

    return (
        <div className={s.wrapper} >
            <div className={s.top}>
                <div>КОРЗИНА</div>
                <div className={s.close} onClick={closeCart}>&times;</div>
            </div>
            <ul className={s.goods_wrapper}>
                {props.cart.map(c =>
                    <li key={c.id} className={s.card_list}>
                        <div className={s.cart_img}></div>
                        <div className={s.card_info}>
                            <h3 className={s.cart_title}>{c.title}</h3>
                            <ul className={s.cart_list}>
                                <li>Цена товара: {c.price + ' $'} </li>
                                <li>Количество: {c.sumprice}</li>
                                <li>Сума к оплате: {c.price * c.sumprice + ' $'}</li>
                            </ul>
                            <Button label={'Удалить'} onClick={() => { let index = props.cart.findIndex(({ id }) => id == c.id); removeGoodsFromCart(index) }} className={s.cart_btn} />
                        </div>
                    </li>
                )}
                {props.cart.length === 0 ? <div>Корзина пуста</div> : <div><Button label='Оформить заказ' className={s.btn_offer} /><Button label='Очистить корзину' onClick={() => {let cart = []; removeAllGoods(cart) } } className={s.btn_remove} /></div>}
            </ul>
            <div className={s.bottom}></div>
        </div>
    )
}


export default Cart;