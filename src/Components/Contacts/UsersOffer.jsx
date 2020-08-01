import React from 'react';
import s from './Contacts.module.scss';
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from '../../utils/validator/validator';
import { Textarea, Input, Button } from '../Common/FormsControls';


let maxLength20 = maxLengthCreator(20);
let minLength5 = minLengthCreator(5);
let maxLength1000 = maxLengthCreator(1000);
let minLength20 = minLengthCreator(20);

const ContactsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={s.form_styles} label={"Имя"} validate={[required, maxLength20, minLength5]} name={"name"} type={"text"} component={Input} />
            <Field className={s.form_styles} label={"E-mail"} validate={[required, maxLength20, minLength5]} type={"text"} name={"email"} component={Input} />
            <Field className={s.form_styles} label={"Номер телефона"} type={"text"} name={"phone"} component={Input} />
            <Field className={s.form_styles} validate={[required, maxLength1000, minLength20]} label={"Введите ваше сообщение"} name={"text"} component={Textarea} />
            <Button label={'Написать'} className={s.form_styles} />
        </form>
    )
}

export const UsersOffer = reduxForm({
    form: 'contacts'
})(ContactsForm)