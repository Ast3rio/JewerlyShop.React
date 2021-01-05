import React from 'react';
import style from './AdminPage.module.scss';
import { useSelector } from 'react-redux';
import { getIndex } from '../../Utils/getIndex';

const AdminMessages = () => {

    const messages = useSelector(state => state.admin.messages);

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
                    <th>{getIndex(messages, mes.id)}</th>
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