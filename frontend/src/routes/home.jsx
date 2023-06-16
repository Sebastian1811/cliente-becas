import NavBar from '../components/navbar';
import Becas from '../components/becas';
import {withRouter} from "react-router"
import Footer from '../components/footer';
const Home = ()=>{
    return (
        <div>
        <NavBar />
        <Becas />
        <Footer />
        </div>
          
    )
}

export default withRouter(Home)