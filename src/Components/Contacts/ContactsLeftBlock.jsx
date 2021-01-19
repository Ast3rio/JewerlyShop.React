import React from 'react';
import style from './Contacts.module.scss';

const ContactsLeftBlock = () => {
    return (
        <div className={style.block__left}>
            <h3>Контакты</h3>
                Режим работы интернет-магазина:
            <ul>
                <li className={style.list}>ПН-ПТ с 11:00 до 19:00</li>
                <li className={style.list}>СБ-ВС с 12:00 до 18:00</li>
            </ul>
                Наш офлайн менеджер:
            <ul>
                <li className={style.list}>+38 (093) 000-00-00</li>
                <li className={style.list}>test@mail.com</li>
            </ul>
        </div>
    )
}

export default ContactsLeftBlock;