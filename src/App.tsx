import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Contact} from "./layout/sections/contact/Contact";
import {Footer} from "./layout/footer/Footer";
import {About} from "./layout/sections/about/About";
import "./fonts.css";
import React from "react";
import {Particle} from "./components/particle/Particle";


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Works/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
