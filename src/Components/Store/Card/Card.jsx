import React from 'react';
import s from './Card.module.scss';
import { Button, Input } from '../../Common/FormsControls';
import Paginator from '../../Common/Paginator/Paginator';
import { reduxForm, Field } from 'redux-form';


const Card = (props) => {

    return (
        <div className={s.articles}>
            <Paginator totalItemsCount={props.totalItemsCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            <ul className={s.wrapper}> {
                props.card.map(c =>
                    <li className={s.card} key={c.id}>
                        <div className={s.img}></div>
                        <CardFunctionalContainer addToCart={props.addToCart} c={c} props={props} />
                    </li>)
            }
            </ul >
        </div>
    )
}


const CardFunctional = ({ addToCart, handleSumbit, c, ...props }) => {
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
                    <button className={s.card__control__btn}>-</button>
                    <Field className={s.card__input__style + ' ' + s.card__input__style__calc} type='text' name='calc' component={Input} disabled={'disabled'} valuespace={1} />
                    <button className={s.card__control__btn}>+</button>
                </div>
                <Button label={'В корзину'} onClick={(e) => { e.preventDefault(); addToCart(c.id) }} className={s.card_btn} />
            </div>
        </form>
    )
}

const CardFunctionalContainer = reduxForm({ form: 'card' })(CardFunctional);


export default Card;