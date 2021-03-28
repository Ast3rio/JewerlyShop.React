import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from '../../../Utils/Validator/validator';
import { Input } from '../../Common/FormsControls';
import ModalWindow from '../../Common/ModalWindow';
import PrivacyCheckbox from '../../Common/PrivacyCheckbox';
import style from './Subscribe.module.scss';


const minLength10 = minLengthCreator(10);
const maxLength50 = maxLengthCreator(50);

const SubscribeForm = ({ handleSubmit, subscribe, modalWindow }) => {
    return (<form onSubmit={handleSubmit}>
        <Field component={Input} name='email' validate={[required, minLength10, maxLength50]} className={style.input} type='text' label='введите имейл' />
        {subscribe ? <button disabled>Вы подписаны</button> : <button>Подписаться</button>}
        <PrivacyCheckbox />
        {modalWindow ? <ModalWindow label={'Вы подписались'} /> : ''}
    </form>)
}

export const SubscribeFormContainer = reduxForm({
    form: 'subscribe',
})(SubscribeForm)