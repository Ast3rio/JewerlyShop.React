import { connect } from "react-redux"
import Main from "./Main"

let mapStateToProps = () => {
    return {
        
    }
}

let mapDispatchToProps = () => {

}


const MainContainer = connect(mapStateToProps, mapDispatchToProps) (Main);

export default MainContainer;