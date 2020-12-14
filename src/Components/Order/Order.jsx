import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClientOffer } from './ClientForm';
import GoodsList from './GoodsList';
import style from './Order.module.scss';

const Order = () => {
    //State
    const goods = useSelector(state => state.cart.cart);
    const orders = useSelector(state => state.admin.orders);
    //Dispatches
    const addNewOrder = useDispatch();

    const onSubmit = () => {
        let newOrder = orders.concat({ id: goods.id, title: goods.title, sumprice: goods.sumprice, price: goods.price });
        addNewOrder({ type: 'ADD_NEW_ORDER', newOrder });
        console.log(orders)
    }

    return (
        <section className={style.wrapper}>
            <div className={style.block_left}>
                <h3>Список покупок</h3>
                <GoodsList goods={goods} />
            </div>
            <div className={style.block_right}>
                <h3>Данные покупателя</h3>
                <ClientOffer onSubmit={onSubmit} />
            </div>
        </section>
    )
}

export default Order;