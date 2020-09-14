import React from 'react';
import Good from "./Good";
import { connect } from "react-redux";


class GoodContainer extends React.Component{
    
    render(){
        return(
            <div>
                <Good card={this.props.card} match={this.props.match.params.id}/>
            </div>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        card: state.storePage.card,
    }
}


export default connect(mapStateToProps, {})(GoodContainer);