import React from 'react';
import s from './ModalWindow.module.scss';

const ModalWindow = ({label, className}) => {
    return(
        <div className={s.modal + ' ' + className}>
            {label}
        </div>
    )
}

export default ModalWindow;