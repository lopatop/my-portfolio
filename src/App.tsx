import './App.css';
import styled from 'styled-components';
import {Header} from "./loyaut/header/Header";
import {Main} from "./loyaut/sections/main/Main";
import {TechStack} from "./loyaut/sections/techStack/TechStack";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <TechStack/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;