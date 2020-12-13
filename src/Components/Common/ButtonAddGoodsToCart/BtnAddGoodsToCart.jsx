import React from 'react';
//Import modules
import { useDispatch, useSelector } from 'react-redux';
//Import components
import { Button } from '../FormsControls';

const BtnAddGoodsToCart = (id, title, price, sumprice) => {
    //State
    const cart = useSelector(state => state.cart.cart);
    //Dispatches
    const addToCart = useDispatch();
    //Function for add good to cart
    const addGoodToCart = (e) => {
        e.preventDefault();
        addToCart({
            type: 'ADD_GOODS_TO_CART',
            addGood = cart.concat({ id: id, title: title, price: price, sumprice: sumprice })
        })
    }

    return <Button label={'В корзину'}
        onClick={addGoodToCart}
        className={style.card_btn} />
}

export default BtnAddGoodsToCart;