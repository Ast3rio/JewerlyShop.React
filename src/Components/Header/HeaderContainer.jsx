import React from "react";
import Header from "./Header";
import { connect } from "react-redux";


class HeaderContainer extends React.Component {
    render(){
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        card: state.storePage.card,
        cart: state.cart.cart,
        totalCountInCart: state.storePage.totalCountInCart,
    }
}

export default connect(mapStateToProps)(HeaderContainer);