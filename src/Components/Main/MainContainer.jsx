import { connect } from "react-redux"
import Main from "./Main"

let mapStateToProps = () => {
    return {
        
    }
}


const MainContainer = connect(mapStateToProps) (Main);

export default MainContainer;