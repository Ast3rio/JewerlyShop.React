import React from 'react';
import { reduxForm, Field } from 'redux-form';
//Import components
import { Input } from '../../Common/FormsControls';
import ModalWindow from '../../Common/ModalWindow';

const SubscribeForm = ({ handleSubmit, subscribe, modalWindow }) => {
    return (<form onSubmit={handleSubmit}>
        <Field component={Input} name='email' type='text' label='введите имейл' />
        {subscribe ? <button disabled>Вы подписаны</button> : <button>Подписаться</button>}
        {modalWindow ? <ModalWindow label={'Вы подписались'} /> : ''}
    </form>)
}

export const SubscribeFormContainer = reduxForm({
    form: 'subscribe',
})(SubscribeForm)