import React from 'react';
import style from './ModalWindow.module.scss';

const ModalWindow = ({label, className}) => {
    return(
        <div className={style.modal + ' ' + className}>
            {label}
        </div>
    )
}

export default ModalWindow;