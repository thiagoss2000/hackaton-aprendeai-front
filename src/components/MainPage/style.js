import styled from "styled-components";


const MainPageContainer = styled.main `

div {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: rgb(225,76,22);
    background: linear-gradient(90deg, rgba(225,76,22,1) 0%, rgba(228,90,28,1) 6%, rgba(231,107,33,1) 17%, rgba(233,119,37,1) 27%, rgba(236,136,43,1) 43%, rgba(240,153,49,1) 56%, rgba(240,160,51,1) 73%, rgba(243,173,56,1) 85%, rgba(243,173,56,1) 100%);

 }

header {
    width: 100%;
    height: 50px;
    text-align: center;
    font-family: 'Roboto Slab', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 48px;
    line-height: 34px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #FFFFFF;

 }



button {
    height: 46px;
    width: 326px;
    background: #65ABB2;
    border-radius: 5px;
    border: none;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    line-height: 23px;
    color: #FFFFFF;

    }

.link button:hover { 
    background: #1c6de4;
    }
`

export default MainPageContainer;