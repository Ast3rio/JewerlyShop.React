import React from 'react';
import s from './Cart.module.scss';
import { Button } from '../Common/FormsControls';


const Cart = ({ closeCart, ...props }) => {

    return (
        <div className={s.wrapper} >
            <div className={s.close} onClick={closeCart}>&times;</div>
            <div>КОРЗИНА</div>
            <ul className='row row-cols-2'>
                {props.cart.map(c =>
                    <li key={c.id} className={'col-4' + ' ' + s.card_list}>
                        <div className={s.cart_img}></div>
                        <span className={s.cart_title}>{c.title}</span>
                        <ul className={s.cart_list}>
                            <li>Цена товара: {c.price + ' $'} </li>
                            <li>Количество: {c.sumprice}</li>
                            <li>Сума к оплате: {c.price * c.sumprice + ' $'}</li>
                        </ul>
                        <Button label={'Удалить'} className={s.cart_btn} />
                    </li>
                )}
            </ul>
        </div>
    )
}


export default Cart;