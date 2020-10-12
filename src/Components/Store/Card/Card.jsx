import React from 'react';
import style from './Card.module.scss';
import Paginator from '../../Common/Paginator/Paginator';
import CardFunctional from './CardFunctional';
import { GOODS_TYPES } from '../../../Redux/store-reducer';
import { Route, Redirect, NavLink } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import Good from '../Good/Good';

const Card = (props) => {
    return (
        <div className={style.articles}>
            <Switch>
                <Route exact path='/store/all' render={() => <CardAll card={props.card} {...props} />} />
                <Route path='/store/rings' render={() => <CardRings card={props.card} {...props} />} />
                <Route path='/store/shackles' render={() => <CardShackles card={props.card} {...props} />} />
                <Route path='/store/bracelets' render={() => <CardBracelets card={props.card} {...props} />} />
                <Route path='/store/men_jewelry' render={() => <CardMenJewelry card={props.card} {...props} />} />
                <Route path='/store/women_jewelry' render={() => <CardWomenJewelry card={props.card} {...props} />} />
                <Route path='/store/new' render={() => <CardNew card={props.card} {...props} />} />
                <Route path={`/store/good/:id`} component={Good} />
                <Redirect from="/store" to="/store/all" />
            </Switch>
        </div>
    )
}


const CardAll = ({ card, cart, upSumprice, downSumprice, addGoodsToCart, totalItemsCount, pageSize, currentPage, onPageChanged, ...props }) => {
    return (
        <div>
            <Paginator className={style.paginator} totalItemsCount={totalItemsCount} pageSize={pageSize}
                currentPage={currentPage} onPageChanged={onPageChanged} />
            <ul className={style.wrapper}>
                {
                    card.map(good =>
                        <li className={style.card} key={good.id}>
                            <NavLink to={`/store/good/${good.id}`}><div className={style.img}></div></NavLink>
                            <CardFunctional addGoodsToCart={addGoodsToCart} upSumprice={upSumprice}
                                downSumprice={downSumprice} cart={cart} card={card} c={good} props={props} />
                        </li>)
                }
            </ul >
        </div>
    )
}

const CardRings = (props) => {
    return (
        <div>
            <Paginator className={style.paginator} totalItemsCount={props.totalItemsCount} pageSize={props.pageSize}
                currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            <ul className={style.wrapper}> {
                props.card.map(c => c.type === GOODS_TYPES.RING &&
                    <li className={style.card}>
                        <NavLink key={c.id} to={`/store/good/${c.id}`}><div className={style.img}></div></NavLink>
                        <CardFunctional addGoodsToCart={props.addGoodsToCart} upSumprice={props.upSumprice}
                            downSumprice={props.downSumprice} cart={props.cart} card={props.card} c={c} props={props} />
                    </li>)
            }
            </ul >
        </div>
    )
}

const CardShackles = (props) => {
    return (
        <div>
            <Paginator className={style.paginator} totalItemsCount={props.totalItemsCount} pageSize={props.pageSize}
                currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            <ul className={style.wrapper}> {
                props.card.map(c => c.type === GOODS_TYPES.SHACKLE &&
                    <NavLink key={c.id} to={`/store/good/${c.id}`}> <li className={style.card} key={c.id}>
                        <div className={style.img}></div>
                        <CardFunctional addGoodsToCart={props.addGoodsToCart} upSumprice={props.upSumprice}
                            downSumprice={props.downSumprice} cart={props.cart} card={props.card} c={c} props={props} />
                    </li></NavLink>)
            }
            </ul >
        </div>
    )
}

const CardBracelets = (props) => {
    return (
        <div>
            <Paginator className={style.paginator} totalItemsCount={props.totalItemsCount} pageSize={props.pageSize}
                currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            <ul className={style.wrapper}> {
                props.card.map(c => c.type === GOODS_TYPES.BRACELET &&
                    <li className={style.card} key={c.id}>
                        <div className={style.img}></div>
                        <CardFunctional addGoodsToCart={props.addGoodsToCart} upSumprice={props.upSumprice}
                            downSumprice={props.downSumprice} cart={props.cart} card={props.card} c={c} props={props} />
                    </li>)
            }
            </ul >
        </div>
    )
}

const CardMenJewelry = (props) => {
    return (
        <div>
            <Paginator className={style.paginator} totalItemsCount={props.totalItemsCount} pageSize={props.pageSize}
                currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            <ul className={style.wrapper}> {
                props.card.map(c => c.type === GOODS_TYPES.MAN_JEWELRY &&
                    <li className={style.card} key={c.id}>
                        <div className={style.img}></div>
                        <CardFunctional addGoodsToCart={props.addGoodsToCart} upSumprice={props.upSumprice}
                            downSumprice={props.downSumprice} cart={props.cart} card={props.card} c={c} props={props} />
                    </li>)
            }
            </ul >
        </div>
    )
}

const CardWomenJewelry = (props) => {
    return (
        <div>
            <Paginator className={style.paginator} totalItemsCount={props.totalItemsCount} pageSize={props.pageSize}
                currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            <ul className={style.wrapper}> {
                props.card.map(c => c.type === GOODS_TYPES.WOMAN_JEWELRY &&
                    <li className={style.card} key={c.id}>
                        <div className={style.img}></div>
                        <CardFunctional addGoodsToCart={props.addGoodsToCart} upSumprice={props.upSumprice}
                            downSumprice={props.downSumprice} cart={props.cart} card={props.card} c={c} props={props} />
                    </li>)
            }
            </ul >
        </div>
    )
}

const CardNew = (props) => {
    return (
        <div>
            <Paginator className={style.paginator} totalItemsCount={props.totalItemsCount} pageSize={props.pageSize}
                currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            <ul className={style.wrapper}> {
                props.card.map(c => c.type === GOODS_TYPES.NEW &&
                    <li className={style.card} key={c.id}>
                        <div className={style.img}></div>
                        <CardFunctional addGoodsToCart={props.addGoodsToCart} upSumprice={props.upSumprice}
                            downSumprice={props.downSumprice} cart={props.cart} card={props.card} c={c} props={props} />
                    </li>)
            }
            </ul >
        </div>
    )
}


export default Card;