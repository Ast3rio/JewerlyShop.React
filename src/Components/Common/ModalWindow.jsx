import React from 'react';
import s from './ModalWindow.module.scss';

const ModalWindow = ({label}) => {
    return(
        <div className={s.modal}>
            {label}
        </div>
    )
}

export default ModalWindow;