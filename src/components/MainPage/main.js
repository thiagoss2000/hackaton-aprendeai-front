import MainPageContainer from "./style";
import { Link } from "react-router-dom";


export default function MainPage() {

    return (
        <MainPageContainer>
            <div>
                <header>Aprende Aí</header>
                <Link className="link" to="/sign-in"><button>Entrar</button></Link>
            </div>
        </MainPageContainer>
    )
}