/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Main, Theme } from "../assets/mainStyled"

import userImg from "../icons/user.png"


export default function HomePage() {
  const { setCategorie} = useContext(AuthContext);

  const navigate = useNavigate();
  const URL = "https://back-aprendeai.herokuapp.com"
  const [themes, setThemes] = useState([]);
  const [userMenu, setUserMenu] = useState(false);

  const user_id = sessionStorage.user;

  useEffect(() => {
    axios.get(`${URL}/categories`, {headers: {'user': user_id}})
    .then((response) => {
      console.log(response.data);
      setThemes(response.data);
    })
    .catch((err) => {console.log(err);})
  }, []);
  
  function logout(){
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('token')
  }

  if(themes.length === 0){
    console.log('loading...');
  } else {
    return (
      <Main>
        <header>
          <div className={`MenuUser ${userMenu? '' : 'displayNone'}`}>
            <h2 onClick={logout}>logout</h2>
          </div>
          <img onClick={() => setUserMenu(true)} className="icon" src={userImg} alt="user"></img>
          <h1>Aprende ai</h1>
          <h3>Olá, {'fulano'}</h3>
        </header>
        <div className="body" onClick={() => setUserMenu(false)}>
          {themes.map((theme) => {
              return(
                <Theme 
                  key={theme._id} 
                  color={theme.color}
                  className="products" 
                  onClick={() => {setCategorie(theme.name); navigate("/")}}
                >
                  <img src={theme.image} alt={theme.name}></img>
                  <h3>{theme.name}</h3>
                </Theme>
              )
          })}
        </div>
      </Main>
    )
  }
}

