import React from 'react';
import style from './AdminPage.module.scss';
import { useSelector } from 'react-redux';

const AdminMessages = () => {

    const messages = useSelector(state => state.admin.messages);
    const getIndex = (getId) => { return messages.findIndex(({ id }) => id == getId) + 1; } ;

    return (
        <table className={style.messages}>
            <thead>
                <tr>
                    <th>Номер</th>
                    <th>Имя</th>
                    <th>Email</th>
                    <th>Телефон</th>
                    <th>Текст</th>
                </tr>
            </thead>
            <tbody>
                {messages.map(mes => <tr key={mes.id}>
                    <th>{getIndex(mes.id)}</th>
                    <th>{mes.name}</th>
                    <th>{mes.mail}</th>
                    <th>{mes.phone}</th>
                    <th>{mes.text}</th>
                </tr>)}
            </tbody>
        </table>
    )
}

export default AdminMessages;