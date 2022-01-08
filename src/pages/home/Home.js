import "./Home.scss";
import Header from "./header/Header";
import Skills from "./skills/Skills";
import Technologies from "./technologies/Technologies";
import { useEffect } from "react";


function Home() {

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return (
        <div id="homePage">
            <Header></Header>
            <Skills></Skills>
            <Technologies></Technologies>
        </div>
    );
}

export default Home;