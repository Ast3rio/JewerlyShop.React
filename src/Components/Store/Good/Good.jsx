import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import s from './Good.module.scss';



const Good = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const card = useSelector(state => state.storePage.card);

    const getGoodElem = (name) => {
        return card[props.match.params.id - 1][name];
    }

    return (
        <div className={s.wrapper}>
            <Slider className={s.slider} {...settings}>
                <div className={s.img}>1</div>
                <div className={s.img}>2</div>
                <div className={s.img}>3</div>
            </Slider>
            <div className={s.info}>
                <div className={s.title}>{getGoodElem('title')}</div>
                <hr />
                <div className={s.price}>$ {getGoodElem('price')}</div>
                {getGoodElem('status') === 'есть в наличии' ? <div className={s.status + ' ' + s.green}>{getGoodElem('status')}</div>
                    : <div className={s.status}>{getGoodElem('status')}</div>}
                <hr />
                <ul className={s.descr}>
                    <li>{getGoodElem('material')}</li>
                    <li>{getGoodElem('width')}</li>
                </ul>
            </div>
        </div>
    )
}

export default Good;