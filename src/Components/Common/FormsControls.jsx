import React from 'react';
import style from './FormsControls.module.scss';

export const Textarea = ({ input, className, label, type, meta }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={style.wrapper}>
            <textarea {...input} className={className + ' ' + style.textarea} placeholder={label} type={type} />
            {hasError && <span className={hasError ? 'error' : ''}>{meta.error}</span>}
        </div>
    )
}

export const Input = ({ input, className, label, type, meta, valuespace, disabled }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={style.wrapper}>
            <input {...input} className={className + ' ' + style.input} disabled={disabled} value={valuespace} placeholder={label} type={type} />
            {hasError && <span className={hasError ? style.error : ''}>{meta.error}</span>}
        </div>
    )
}


export const Button = ({ className, label, onClick }) => {
    return (
        <button onClick={onClick} className={style.btn + ' ' + className }>{label}</button>
    )
}