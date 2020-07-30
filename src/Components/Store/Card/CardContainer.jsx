import React from 'react';
import { connect } from "react-redux";
import Card from  "./Card";
import { addToCart, setCurrentPage } from "../../../Redux/store-reducer";

class CardContainer extends React.Component{

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
    }

    render(){
        return(
            <Card {...this.props} addToCart={this.props.addToCart} onPageChanged={this.onPageChanged} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        card: state.storePage.card,
        totalItemsCount: state.storePage.totalItemsCount,
        pageSize: state.storePage.pageSize,
        currentPage: state.storePage.currentPage,
    }
}

export default connect(mapStateToProps, {addToCart, setCurrentPage})(CardContainer);

