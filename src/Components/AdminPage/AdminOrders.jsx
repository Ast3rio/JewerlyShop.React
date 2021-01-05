import React from 'react';
import style from './AdminPage.module.scss';
import { useSelector } from 'react-redux';
import { getIndex } from '../../Utils/getIndex';

const AdminOrders = () => {

    const orders = useSelector(state => state.admin.orders);

    return (
        <ul className={style.order}>
            {orders.map(or => <li key={or.id}>{getIndex(orders, or.id)} Title: {or.title}, Sumprice: {or.sumprice}, Price: {or.price}</li>)}
        </ul>
    )
}

export default AdminOrders;