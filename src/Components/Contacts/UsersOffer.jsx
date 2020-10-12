import React from 'react';
import style from './Contacts.module.scss';
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from '../../Utils/Validator/validator';
import { Textarea, Input, Button } from '../Common/FormsControls';


let maxLength100 = maxLengthCreator(100);
let minLength5 = minLengthCreator(5);
let maxLength2000 = maxLengthCreator(2000);
let minLength20 = minLengthCreator(20);

const ContactsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={style.form_styles} label={"Имя"} validate={[required, maxLength100, minLength5]} name={"name"} type={"text"} component={Input} />
            <Field className={style.form_styles} label={"E-mail"} validate={[required, maxLength100, minLength5]} type={"text"} name={"email"} component={Input} />
            <Field className={style.form_styles} label={"Номер телефона"} type={"text"} name={"phone"} component={Input} />
            <Field className={style.form_styles} validate={[required, maxLength2000, minLength20]} label={"Введите ваше сообщение"} name={"text"} component={Textarea} />
            <Button label={'Написать'} className={style.form_styles} />
        </form>
    )
}

export const UsersOffer = reduxForm({
    form: 'contacts'
})(ContactsForm)