import React from 'react';
import s from './FormsControls.module.scss';

export const Textarea = ({ input, className, label, type, meta }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={s.wrapper}>
            <textarea {...input} className={className + ' ' + s.textarea} placeholder={label} type={type} />
            {hasError && <span className={hasError ? s.error : ''}>{meta.error}</span>}
        </div>
    )
}

export const Input = ({ input, className, label, type, meta, valuespace, disabled }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={s.wrapper}>
            <input {...input} className={className + ' ' + s.input} disabled={disabled} value={valuespace} placeholder={label} type={type} />
            {hasError && <span className={hasError ? s.error : ''}>{meta.error}</span>}
        </div>
    )
}


export const Button = ({ className, label, onClick }) => {
    return (
        <button onClick={onClick} className={s.btn + ' ' + className }>{label}</button>
    )
}