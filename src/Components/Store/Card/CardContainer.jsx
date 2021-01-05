import React from 'react';
import { connect } from "react-redux";
import Card from  "./Card";
import { setCurrentPage, upGoodsCount, downGoodsCount } from "../../../Redux/store-reducer";
import { addGoodsToCart } from '../../../Redux/cart-reducer';

class CardContainer extends React.Component{

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
    }

    render(){
        return(
            <Card {...this.props} addGoodsToCart={this.props.addGoodsToCart} upGoodsCount={this.props.upGoodsCount} downGoodsCount={this.props.downGoodsCount} onPageChanged={this.onPageChanged} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        card: state.storePage.card,
        cart: state.cart.cart,
        totalItemsCount: state.storePage.totalItemsCount,
        pageSize: state.storePage.pageSize,
        currentPage: state.storePage.currentPage,
    }
}

export default connect(mapStateToProps, {addGoodsToCart, setCurrentPage, upGoodsCount, downGoodsCount})(CardContainer);

