import React from 'react';
import s from './FormsControls.module.scss';

export const Textarea = ({ input, className, label, type, meta }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={hasError ? s.error : ''}>
            <textarea {...input} className={className + ' ' + s.textarea} placeholder={label} type={type} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({ input, className, label, type, meta }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={hasError ? s.error : ''}>
            <input {...input} className={className + ' ' + s.input} placeholder={label} type={type} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Button = ({ className, label }) => {
    return (
        <button className={s.btn + ' ' + className }>{label}</button>
    )
}