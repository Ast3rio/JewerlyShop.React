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
                {goods.map(good => <tr key={good.id}>
                    <td>{good.title}</td>
                    <td>{good.count}</td>
                    <td>{good.price * good.count}</td></tr>)}
            </tbody>
        </table>
    )
}

export default GoodsList;