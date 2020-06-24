import { connect } from "react-redux";
import Card from  "./Card";




let mapStateToProps = (state) => {

    return {
        card: state.storePage.card,
    }
}

let mapDispatchToProps = () => {

}



const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);

export default CardContainer;
