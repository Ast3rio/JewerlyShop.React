import React from 'react';
import s from './Contacts.module.scss';
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from '../../utils/validator/validator';
import { Textarea, Input, Button } from '../Common/FormsControls';

let maxLength = maxLengthCreator(10);
let minLength = minLengthCreator(2);

const Contacts = () => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <section className={s.contacts}>
            <div className={s.contacts__wrapper}>
                <div className={s.block__left}>
                    <h3>Контакты</h3>
                Режим работы интернет-магазина:
                     <ul>
                        <li className={s.list}>ПН-ПТ с 11:00 до 19:00</li>
                        <li className={s.list}>СБ-ВС с 12:00 до 18:00</li>
                    </ul>
                Наш офлайн менеджер:
                    <ul>
                        <li className={s.list}>+38 (093) 000-00-00</li>
                        <li className={s.list}>test@mail.com</li>
                    </ul>
                </div>
                <div className={s.block__right}>
                    <h3>Сотрудничество / Предложения</h3>
                Если у Вас есть к нам предложение о сотрудничестве, вопрос, напишите нам на почту - test@mail.com
                <UsersOffer onSubmit={onSubmit} />
                </div>
            </div>
        </section>
    )
}

const ContactsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={s.form_styles} label={"Имя"} validate={[required, maxLength, minLength]} name={"name"} type={"text"} component={Input} />
            <Field className={s.form_styles} label={"E-mail"} validate={[required, maxLength, minLength]} type={"text"} name={"email"} component={Input} />
            <Field className={s.form_styles} validate={[required, maxLength, minLength]} label={"Введите ваше сообщение"} name={"text"} component={Textarea} />
            <Button label={'Написать'} className={s.form_styles} />
        </form>
    )
}

const UsersOffer = reduxForm({
    form: 'contacts'
})(ContactsForm)


export default Contacts;