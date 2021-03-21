import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { Button } from '../../Common/FormsControls';
import GoodsAmount from '../../Common/GoodsAmount/GoodsAmount';
import style from './Good.module.scss';



const Good = () => {
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

    const getId = useParams();

    const addToCart = useDispatch();

    const addGoodsToCart = (addGood) => addToCart({ type: 'ADD_GOODS_TO_CART', addGood });

    return (
        <>
            {card.filter(id => id.id == getId.id)
                .map(({ id, title, price, status, count, material, width }) =>
                    <div key={id} className={style.wrapper}>
                        <Slider className={style.slider} {...settings}>
                            <div className={style.img}>1</div>
                            <div className={style.img}>2</div>
                            <div className={style.img}>3</div>
                        </Slider>
                        <div className={style.info}>
                            <div className={style.title}>{title}</div>
                            <hr />
                            <div className={style.price}>$ {price}</div>
                            {status === 'есть в наличии' ? <div className={style.status + ' ' + style.green}>{status}</div>
                                : <div className={style.status}>{status}</div>}
                            <Button label={'В корзину'}
                                onClick={(e) => {
                                    e.preventDefault();
                                    addGoodsToCart(cart.concat({
                                        id: id, title: title,
                                        price: price, count: count
                                    }))
                                }}
                                className={style.card_btn} />
                            <GoodsAmount count={count} id={id} />
                            <hr />
                            <ul className={style.descr}>
                                <span>Характеристики:</span>
                                <li> Материал: {material}</li>
                                <li> Размер: {width}</li>
                            </ul>
                        </div>
                    </div>
                )}
        </>
    )
}

export default Good;