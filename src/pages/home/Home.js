import "./Home.scss";
import Header from "./header/Header";
import Skills from "./skills/Skills";
import Technologies from "./technologies/Technologies";


function Home() {
    return (
        <div id="homePage">
            <Header></Header>
            <Skills></Skills>
            <Technologies></Technologies>
        </div>
    );
}

export default Home;