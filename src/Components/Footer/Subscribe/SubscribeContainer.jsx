import React from 'react';
import Subscribe from "./Subscribe";
import { connect } from "react-redux";
import { updateSubscribeText, setNewSub, setSubscribe } from "../../../Redux/footer-reducer";



class SubscribeContainer extends React.Component{

    render(){
        return(
            <Subscribe {...this.props} setSubscribe={this.props.setSubscribe}/>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        subscribe: state.footer.subscribe,
        newSubscribeText: state.footer.newSubscribeText,
    }
}



export default connect (mapStateToProps, {updateSubscribeText, setNewSub, setSubscribe})(SubscribeContainer);

