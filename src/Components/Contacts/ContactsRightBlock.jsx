import React from 'react';
import style from './Contacts.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { UsersOffer } from './UsersOffer';

const ContactsRightBlock = ({setModalWindow}) => {

    const messages = useSelector(state => state.admin.messages);
   
    const addNewMessage = useDispatch();

    const onSubmit = (formData) => {
        setModalWindow(true);
        let message = messages.push({ id: 2, name: formData.name, mail: formData.email, phone: formData.phone, text: formData.text });
        addNewMessage({ type: 'ADD_NEW_SUBSCRIBER', message });
    };

    return (
        <div className={style.block__right}>
            <h3>Сотрудничество / Предложения</h3>
                Если у Вас есть к нам предложение о сотрудничестве, вопрос, напишите нам на почту - test@mail.com
            <UsersOffer onSubmit={onSubmit} />
        </div>
    )
}

export default ContactsRightBlock;