import React from 'react';
import s from './Card.module.scss';
import Paginator from '../../Common/Paginator/Paginator';
import CardFunctional from './CardFunctional';
import { GOODS_TYPES } from '../../../Redux/store-reducer';
import { Route, Redirect } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';




const Card = (props) => {
    return (
        <div className={s.articles}>
            <Paginator className={s.paginator} totalItemsCount={props.totalItemsCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            <Switch>
                <Route exact path='/store/all' render={() => <CardAll card={props.card} {...props} />} />
                <Route path='/store/rings' render={() => <CardRings card={props.card} {...props} />} />
                <Route path='/store/shackles' render={() => <CardShackles card={props.card} {...props} />} />
                <Route path='/store/bracelets' render={() => <CardBracelets card={props.card} {...props} />} />
                <Route path='/store/men_jewelry' render={() => <CardMenJewelry card={props.card} {...props} />} />
                <Route path='/store/women_jewelry' render={() => <CardWomenJewelry card={props.card} {...props} />} />
                <Route path='/store/new' render={() => <CardNew card={props.card} {...props} />} />
                <Redirect from="/store" to="/store/all" />
            </Switch>
        </div>
    )
}

class CardAll extends React.Component {
    render() {
        return (
            <ul className={s.wrapper}> {
                this.props.card.map(c =>
                    <li className={s.card} key={c.id}>
                        <div className={s.img}></div>
                        <CardFunctional addGoodsToCart={this.props.addGoodsToCart} upSumprice={this.props.upSumprice}
                            downSumprice={this.props.downSumprice} cart={this.props.cart} card={this.props.card} c={c} props={this.props} />
                    </li>)
            }
            </ul >
        )
    }
}

class CardRings extends React.Component {
    render() {
        return (
            <ul className={s.wrapper}> {
                this.props.card.map(c => c.type === GOODS_TYPES.RING &&
                    <li className={s.card} key={c.id}>
                        <div className={s.img}></div>
                        <CardFunctional addGoodsToCart={this.props.addGoodsToCart} upSumprice={this.props.upSumprice}
                            downSumprice={this.props.downSumprice} cart={this.props.cart} card={this.props.card} c={c} props={this.props} />
                    </li>)
            }
            </ul >
        )
    }
}

class CardShackles extends React.Component {
    render() {
        return (
            <ul className={s.wrapper}> {
                this.props.card.map(c => c.type === GOODS_TYPES.SHACKLE &&
                    <li className={s.card} key={c.id}>
                        <div className={s.img}></div>
                        <CardFunctional addGoodsToCart={this.props.addGoodsToCart} upSumprice={this.props.upSumprice}
                            downSumprice={this.props.downSumprice} cart={this.props.cart} card={this.props.card} c={c} props={this.props} />
                    </li>)
            }
            </ul >
        )
    }
}

class CardBracelets extends React.Component {
    render() {
        return (
            <ul className={s.wrapper}> {
                this.props.card.map(c => c.type === GOODS_TYPES.BRACELET &&
                    <li className={s.card} key={c.id}>
                        <div className={s.img}></div>
                        <CardFunctional addGoodsToCart={this.props.addGoodsToCart} upSumprice={this.props.upSumprice}
                            downSumprice={this.props.downSumprice} cart={this.props.cart} card={this.props.card} c={c} props={this.props} />
                    </li>)
            }
            </ul >
        )
    }
}

class CardMenJewelry extends React.Component {
    render() {
        return (
            <ul className={s.wrapper}> {
                this.props.card.map(c => c.type === GOODS_TYPES.MAN_JEWELRY &&
                    <li className={s.card} key={c.id}>
                        <div className={s.img}></div>
                        <CardFunctional addGoodsToCart={this.props.addGoodsToCart} upSumprice={this.props.upSumprice}
                            downSumprice={this.props.downSumprice} cart={this.props.cart} card={this.props.card} c={c} props={this.props} />
                    </li>)
            }
            </ul >
        )
    }
}

class CardWomenJewelry extends React.Component {
    render() {
        return (
            <ul className={s.wrapper}> {
                this.props.card.map(c => c.type === GOODS_TYPES.WOMAN_JEWELRY &&
                    <li className={s.card} key={c.id}>
                        <div className={s.img}></div>
                        <CardFunctional addGoodsToCart={this.props.addGoodsToCart} upSumprice={this.props.upSumprice}
                            downSumprice={this.props.downSumprice} cart={this.props.cart} card={this.props.card} c={c} props={this.props} />
                    </li>)
            }
            </ul >
        )
    }
}

class CardNew extends React.Component {
    render() {
        return (
            <ul className={s.wrapper}> {
                this.props.card.map(c => c.type === GOODS_TYPES.NEW &&
                    <li className={s.card} key={c.id}>
                        <div className={s.img}></div>
                        <CardFunctional addGoodsToCart={this.props.addGoodsToCart} upSumprice={this.props.upSumprice}
                            downSumprice={this.props.downSumprice} cart={this.props.cart} card={this.props.card} c={c} props={this.props} />
                    </li>)
            }
            </ul >
        )
    }
}


export default Card;