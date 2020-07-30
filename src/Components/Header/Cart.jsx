import React from 'react';
import s from './Cart.module.scss';
import { Button } from '../Common/FormsControls';


const Cart = ({ closeCart, deleteFromCart, ...props }) => {

    return (
        <div className={s.wrapper} >
            <div className={s.close} onClick={closeCart}>&times;</div>
            <div>КОРЗИНА</div>
            <ul className='row row-cols-2'>
                {props.card.map(c =>
                    c.addedToCart && <li key={c.id} className={'col-4' + ' ' + s.card_list}>
                        <div className={s.cart_img}></div>
                        <span className={s.cart_title}>{c.title}</span>
                        <Button label={'Удалить'} onClick={() => { deleteFromCart(c.id) }} className={s.cart_btn} />
                    </li>
                )}
            </ul>
        </div>
    )
}


export default Cart;