import React from 'react';
import style from './Order.module.scss';

const GoodsList = ({ goods }) => {
    return (
        <table className={style.list}>
            <thead>
                <tr>
                    <th>Наименование</th>
                    <th>Количество</th>
                    <th>Сумма</th>
                </tr>
            </thead>
            <tbody>
                {goods.map(({id, title, count, price}) => <tr key={id}>
                    <td>{title}</td>
                    <td>{count}</td>
                    <td>{price * count}</td></tr>)}
            </tbody>
        </table>
    )
}

export default GoodsList;