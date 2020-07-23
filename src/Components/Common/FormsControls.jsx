import React from 'react';
import s from './FormsControls.module.scss';

export const Textarea = ({ input, className, label, type, meta }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={s.textarea_styles + ' ' + (hasError ? s.error : '')}>
            <textarea {...input} className={className} placeholder={label} type={type} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({ input, className, label, type, meta }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={s.input_styles + ' ' + (hasError ? s.error : '')}>
            <input {...input} className={className} placeholder={label} type={type} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}