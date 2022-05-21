import MainPageContainer from "./style";
import { Link, useNavigate} from "react-router-dom";


export default function MainPage() {

    return (
        <MainPageContainer>
            <div>
                <header>Aprende Aí</header>
                <Link className="link" to="/homepage"><button>Entrar</button></Link>
            </div>
        </MainPageContainer>
    )
}