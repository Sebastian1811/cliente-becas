import NavBar from '../components/navbar';
import Card from '../components/card';
import { obtenerBeca } from '../data/becasApi';

const becas = obtenerBeca(1)

const Home = ()=>{
    return (
        <div>
        <NavBar />
        <Card />
        <div>
            <h1>{becas}</h1>
        </div>
        </div>
          
    )
}

export default Home