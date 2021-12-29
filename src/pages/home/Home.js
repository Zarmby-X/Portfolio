import "./Home.scss";
import Header from "./header/Header";
import Skills from "./skills/Skills";


function Home() {
    return (
        <div id="homePage">
            <Header></Header>
            <Skills></Skills>
        </div>
    );
}

export default Home;