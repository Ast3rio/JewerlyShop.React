import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from '../../Utils/Validator/validator';
import { Button, Input } from '../Common/FormsControls';
import style from './Order.module.scss';


let maxLength100 = maxLengthCreator(100);
let minLength5 = minLengthCreator(5);


const ClientForm = () => {
    return (
        <form>
            <Field className={style.form_styles} label={"Имя"} validate={[required, maxLength100, minLength5]} name={"name"} type={"text"} component={Input}/>
            <Field className={style.form_styles} label={"Телефон"} validate={[required, maxLength100, minLength5]} name={"phone"} type={"text"} component={Input}/>
            <Field className={style.form_styles} label={"Email"} validate={[required, maxLength100, minLength5]} name={"mail"} type={"text"} component={Input}/>
            <Button />
        </form>
    )
}

export const ClientOffer = reduxForm({
    form: 'contacts'
})(ClientForm)