import AboutPage from '../components/about'
import NavBar from '../components/navbar'
import { withRouter } from 'react-router'


const About = ()=>{
    return (
        <div>
        <NavBar />
         <AboutPage />
        </div>
    )
}

export default About