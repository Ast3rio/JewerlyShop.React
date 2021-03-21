import React from 'react';
import style from './AdminPage.module.scss';
import { useSelector } from 'react-redux';
import { getIndex } from '../../Utils/getIndex';
import { PropTypes } from 'prop-types';

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
                {messages.map(({id = 'no data', name = 'no data', mail = 'no data', phone='no data', text='no data'}) => <tr key={id}>
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


AdminMessages.propTypes = {
    messages: PropTypes.array.isRequired,
}

AdminMessages.defaultProps = {
    messages: []
}

export default AdminMessages;