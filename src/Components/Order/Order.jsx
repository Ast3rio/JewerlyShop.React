import React from 'react';
import { useSelector } from 'react-redux';
import GoodInCart from '../Header/GoodInCart';
import { ClientOffer } from './ClientForm';
import style from './Order.module.scss';

const Order = () => {

    const goods = useSelector(state => state.cart.cart);

    const onSubmit = () => {

    }

    return (
        <section className={style.wrapper}>
            <div className={style.block_left}>
                <h3>Список покупок</h3>
                <ul className={style.goods_wrapper}>
                    <GoodInCart />
                </ul>
            </div>
            <div className={style.block_right}>
                <h3>Данные покупателя</h3>
                <ClientOffer onSubmit={onSubmit} />
            </div>
        </section>
    )
}

export default Order;