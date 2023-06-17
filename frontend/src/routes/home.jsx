import NavBar from '../components/navbar';
import Becas from '../components/becas';
import {withRouter} from "react-router"
import Footer from '../components/footer';
import { useParams } from "react-router-dom";

const Home = ()=>{
    const {page} = useParams();
    const pagina = page
    return (
        <div>
        <NavBar />
        <Becas currentpage={pagina}/>
        <Footer />
        </div>
          
    )
}

export default withRouter(Home)