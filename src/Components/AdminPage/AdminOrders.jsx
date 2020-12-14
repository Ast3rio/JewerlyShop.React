import React from 'react';
import style from './AdminPage.module.scss';
import { useSelector } from 'react-redux';

const AdminOrders = () => {

    const orders = useSelector(state => state.admin.orders);

    const getIndex = (getId) => { return orders.findIndex(({ id }) => id == getId) + 1; } ;

    return (
        <ul className={style.order}>
            {orders.map(or => <li key={or.id}>{getIndex(or.id)} Title: {or.title}, Sumprice: {or.sumprice}, Price: {or.price}</li>)}
        </ul>
    )
}

export default AdminOrders;