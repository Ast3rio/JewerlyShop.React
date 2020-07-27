import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { deleteFromCart } from "../../Redux/store-reducer";


class HeaderContainer extends React.Component {
    render(){
        return (
            <Header {...this.props} deleteFromCart={this.props.deleteFromCart}/>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        card: state.storePage.card,
    }
}

export default connect(mapStateToProps, {deleteFromCart})(HeaderContainer);