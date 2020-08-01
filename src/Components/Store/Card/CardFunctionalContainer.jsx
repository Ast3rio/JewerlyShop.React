import React from 'react';
import s from './Card.module.scss';
import { Button, Input } from '../../Common/FormsControls';
import { reduxForm, Field } from 'redux-form';



const CardFunctional = ({ addToCart, downSumprice, upSumprice, c, ...props }) => {


    return (
        <form>
            <Field className={s.card__input__style + ' ' + s.card__input__style__title} name='title' component={Input} disabled={'disabled'} valuespace={c.title} />
            <div className={s.top}>
                <Field className={s.card__input__style + ' ' + s.card__input__style__price} name='price' component={Input} disabled={'disabled'} valuespace={c.price + ' $'} />
                <Field className={s.card__input__style + ' ' + s.card__input__style__status} name='status' component={Input} disabled={'disabled'} valuespace={c.status} />
            </div>
            <ul className={s.bottom}>
                <li><span className={s.bottom__list}>Ширина основы: </span><Field className={s.card__input__style + ' ' + s.card__input__style__descr} name='descr' component={Input} disabled={'disabled'} valuespace={c.descr.width} /></li>
                <li><span className={s.bottom__list}>Материал: </span><Field className={s.card__input__style + ' ' + s.card__input__style__descr} name='descr' component={Input} disabled={'disabled'} valuespace={c.descr.material} /></li>
            </ul>
            <div className={s.card__control}>
                <div className={s.card__control__wrapper}>
                    <div className={s.card__control__btn + ' ' + s.card__control__btn__minus} onClick={() => downSumprice(c.id, c.sumprice >1 ? c.sumprice - 1 : c.sumprice=1)}></div>
                    <Field className={s.card__input__style + ' ' + s.card__input__style__calc} type='text' name='calc' component={Input} disabled={'disabled'} valuespace={c.sumprice} />
                    <div className={s.card__control__btn + ' ' + s.card__control__btn__plus} onClick={() => upSumprice(c.id, c.sumprice <10 ? c.sumprice + 1: c.sumprice=10)}></div>
                </div>
                <Button label={'В корзину'} onClick={(e) => { e.preventDefault(); addToCart(c.id) }} className={s.card_btn} />
            </div>
        </form>
    )
}


export const CardFunctionalContainer = reduxForm({ form: 'card' })(CardFunctional);