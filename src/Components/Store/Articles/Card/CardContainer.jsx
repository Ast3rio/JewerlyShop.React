import React from 'react';
import { connect } from "react-redux";
import Card from  "./Card";
import { addToCart } from "../../../../Redux/store-reducer";

class CardContainer extends React.Component{

    


    render(){
        return(
            <Card {...this.props} addToCart={this.props.addToCart} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        card: state.storePage.card,
    }
}

export default connect(mapStateToProps, {addToCart})(CardContainer);

