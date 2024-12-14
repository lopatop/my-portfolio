import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {TechStack} from "./layout/sections/techStack/TechStack";
import {Works} from "./layout/sections/works/Works";
import {Contact} from "./layout/sections/contact/Contact";
import {Footer} from "./layout/footer/Footer";
import {About} from "./layout/sections/about/About";
import "./fonts.css";



function App() {
    return (
        <div className="App">

            <Header/>
            <Main/>
            <About/>
            <TechStack/>
            <Works/>
            <Contact/>
            <Footer/>

        </div>
    );
}

export default App;
