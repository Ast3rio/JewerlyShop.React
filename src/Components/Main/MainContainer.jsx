import { connect } from "react-redux"
import Main from "./Main"

let mapStateToProps = (state) => {
    return {
        blocks: state.mainPage.blocks,
    }
}


const MainContainer = connect(mapStateToProps) (Main);

export default MainContainer;