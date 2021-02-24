import React from 'react';
import style from './AdminPage.module.scss';
import { useSelector } from 'react-redux';
import { getIndex } from '../../Utils/getIndex';

const AdminOrders = () => {

    const orders = useSelector(state => state.admin.orders);

    return (
        <ul className={style.order}>
            {orders.map(({id, title, count, price}) => <li key={id}>{getIndex(orders, id)} Title: {title}, Sumprice: {count}, Price: {price}</li>)}
        </ul>
    )
}

export default AdminOrders;