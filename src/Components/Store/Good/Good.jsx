import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
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
    
    const getGoodElem = (name) => {
        return card[props.match.params.id - 1][name];
    }

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