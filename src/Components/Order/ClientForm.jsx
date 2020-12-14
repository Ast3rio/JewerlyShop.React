import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from '../../Utils/Validator/validator';
import { Button, Input } from '../Common/FormsControls';
import style from './Order.module.scss';


let maxLength100 = maxLengthCreator(100);
let minLength5 = minLengthCreator(5);


const ClientForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={style.form} label={"Имя"} validate={[required, maxLength100, minLength5]} name={"name"} type={"text"} component={Input}/>
            <Field className={style.form} label={"Телефон"} validate={[required, maxLength100, minLength5]} name={"phone"} type={"text"} component={Input}/>
            <Field className={style.form} label={"Email"} validate={[required, maxLength100, minLength5]} name={"mail"} type={"text"} component={Input}/>
            <Button label={'Сделать заказ'} className={style.form}/>
        </form>
    )
}

export const ClientOffer = reduxForm({
    form: 'order'
})(ClientForm)