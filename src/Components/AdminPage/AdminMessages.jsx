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
                {messages.map(({id, name, mail, phone, text}) => <tr key={id}>
                    <th>{getIndex(messages, id)}</th>
                    <th>{name}</th>
                    <th>{mail}</th>
                    <th>{phone}</th>
                    <th>{text}</th>
                </tr>)}
            </tbody>
        </table>
    )
}

export default AdminMessages;