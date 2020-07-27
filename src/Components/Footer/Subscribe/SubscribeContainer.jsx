import React from 'react';
import Subscribe from "./Subscribe";
import { connect } from "react-redux";
import { setSubscribe } from "../../../Redux/footer-reducer";



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
    }
}



export default connect (mapStateToProps, { setSubscribe })(SubscribeContainer);

