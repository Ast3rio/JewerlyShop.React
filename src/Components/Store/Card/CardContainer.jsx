import React from 'react';
import { connect } from "react-redux";
import Card from  "./Card";
import { setCurrentPage, upSumprice, downSumprice } from "../../../Redux/store-reducer";
import { addGoodsToCart } from '../../../Redux/cart-reducer';

class CardContainer extends React.Component{

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
    }

    render(){
        return(
            <Card {...this.props} addGoodsToCart={this.props.addGoodsToCart} upSumprice={this.props.upSumprice} downSumprice={this.props.downSumprice} onPageChanged={this.onPageChanged} />
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

export default connect(mapStateToProps, {addGoodsToCart, setCurrentPage, upSumprice, downSumprice})(CardContainer);

