import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { Button } from '../../Common/FormsControls';
import GoodsAmount from '../../Common/GoodsAmount/GoodsAmount';
import style from './Good.module.scss';



const Good = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const card = useSelector(state => state.storePage.card);
    const cart = useSelector(state => state.cart.cart);

    const getGoodElem = (name) => {
        return card[props.match.params.id - 1][name];
    }

    const addToCart = useDispatch();

    const addGoodsToCart = (addGood) => addToCart({type: 'ADD_GOODS_TO_CART', addGood});

    return (
        <div className={style.wrapper}>
            <Slider className={style.slider} {...settings}>
                <div className={style.img}>1</div>
                <div className={style.img}>2</div>
                <div className={style.img}>3</div>
            </Slider>
            <div className={style.info}>
                <div className={style.title}>{getGoodElem('title')}</div>
                <hr />
                <div className={style.price}>$ {getGoodElem('price')}</div>
                {getGoodElem('status') === 'есть в наличии' ? <div className={style.status + ' ' + style.green}>{getGoodElem('status')}</div>
                    : <div className={style.status}>{getGoodElem('status')}</div>}
                <Button label={'В корзину'}
                    onClick={(e) => { e.preventDefault(); addGoodsToCart(cart.concat({ id: getGoodElem('id'), title: getGoodElem('title'), 
                    price: getGoodElem('price'), sumprice: getGoodElem('sumprice') })) }}
                    className={style.card_btn} />
                <GoodsAmount sumprice={getGoodElem('sumprice')} id={getGoodElem('id')} />
                <hr />
                <ul className={style.descr}>
                    <span>Характеристики:</span>
                    <li> Материал: {getGoodElem('material')}</li>
                    <li> Размер: {getGoodElem('width')}</li>
                </ul>
            </div>
        </div>
    )
}

export default Good;