import React from 'react';
import style from './../Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {PropTypes} from 'prop-types';

const Bucket = ({ cart, openCart }) => {
    return (
        <div className={style.cart__wrapper}>
            <div className={style.cart__number}>{cart.length}</div>
            <FontAwesomeIcon className={style.cart + ' ' + style.icon_style} onClick={openCart} icon={faShoppingCart} />
        </div>
    )
}

Bucket.propTypes = {
    cart: PropTypes.array.isRequired,
}

export default Bucket;