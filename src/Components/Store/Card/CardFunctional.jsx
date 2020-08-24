import React from 'react';
import s from './Card.module.scss';
import { Button } from '../../Common/FormsControls';




const CardFunctional = ({ addGoodsToCart, downSumprice, upSumprice, c, cart, ...props }) => {


    return (
        <div>
            <h6 className={s.card_title}>{c.title}</h6>
            <div className={s.top}>
                <div className={s.price}>{c.price + ' $'}</div>
                {c.status === 'есть в наличии' ? <div className={s.status + ' ' + s.green}>{c.status}</div>
                    : <div className={s.status}>{c.status}</div>}
            </div>
            <ul className={s.bottom}>
                <li>Ширина основы: {c.descr.width}</li>
                <li>Материал: {c.descr.material}</li>
            </ul>
            <div className={s.control}>
                <Button label={'В корзину'} onClick={(e) => { e.preventDefault(); addGoodsToCart(cart.concat({id: c.id, title: c.title, price: c.price, sumprice: c.sumprice})) }} className={s.card_btn} />
                <div className={s.control__wrapper}>
                    <div className={s.control__btn + ' ' + s.control__btn__minus}
                        onClick={() => downSumprice(c.id, c.sumprice > 1 ? c.sumprice - 1 : c.sumprice = 1)}></div>
                    <div className={s.calc}>{c.sumprice}</div>
                    <div className={s.control__btn + ' ' + s.control__btn__plus}
                        onClick={() => upSumprice(c.id, c.sumprice < 10 ? c.sumprice + 1 : c.sumprice = 10)}></div>
                </div>
            </div>
        </div>
    )
}


export default CardFunctional;