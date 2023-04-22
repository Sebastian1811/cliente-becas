import NavBar from '../components/navbar';
import Becas from '../components/becas';
import {withRouter} from "react-router"
const Home = ()=>{
    return (
        <div>
        <NavBar />
        <Becas />
        </div>
          
    )
}

export default withRouter(Home)