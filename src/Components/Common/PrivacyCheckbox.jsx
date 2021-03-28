import React from 'react';
import { NavLink } from 'react-router-dom';
import { Field } from 'redux-form';
import { Input } from './FormsControls';
import style from './PrivacyCheckbox.module.scss';
import {required} from '../../Utils/Validator/validator';

const PrivacyCheckbox = () => {
    return (
        <div className={style.privacy}>
            <Field component={Input} name='check' type='checkbox' validate={[required]} className={style.checkbox} />
            <div>Я согласен <NavLink to='/privacy'>с политикой конфидицеальности</NavLink></div>
        </div>
    )
}

export default PrivacyCheckbox;