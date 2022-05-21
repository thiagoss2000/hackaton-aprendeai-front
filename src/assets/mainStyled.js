import styled from "styled-components";

export const Main = styled.main`
background-color: var(--theme-light);
.displayNone {
  display: none;
}
.MenuUser {
  top: 60px;
  position: absolute;
  background-color: #dddddd;
  width: 200px;
  height: 50px;
  z-index: 2;
}
.MenuUser h2 {
  width: 100%;
  margin-top: 4px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
header {
  position: relative;
  height: 60px;
  background-color: var(--theme);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  position: absolute;
  font-family: "Saira Stencil One", cursive;
  font-size: 32px;
  color: #ffffff;
  left: 50%;
  transform: translate(-50%, 0);
}
header p {
  position: absolute;
  right: 46px;
  top: 38px;
}
header h3 {
  margin-right: 30px;
  font-size: 20px;
}
.icon {
  margin-inline: 10px;
  height: 40px;
  color: white;
  cursor: pointer;
}
button {
  margin-left: 50%;
  transform: translate(-50%, 0);
  background-color: var(--theme);
  color: #000;
  margin-block: 10px;
  width: 80vw;
  height: 40px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
h2 {
  font-size: 20px;
  position: absolute;
  top: 10px;
}
.body {
  margin-left: 50%;
  transform: translate(-50%, 0);
  background-color: #FFFFFF;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: calc(100vh - 60px);
}
@media (max-width: 1100px){
  .body{
    padding-top: 30px;
    width: 100%;
    align-items: flex-start;
  }
}
`
export const Theme = styled.div`
  margin: 10px;
  width: 200px;
  height: 200px;
  cursor: pointer;
  position: relative;
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 40px;
    height: 100px;
    width: 160px;
    border-radius: 10px;
  }
  h3 {
    margin-inline: 12px;
    font-size: 18px;
    font-weight: bold;
    color: #252525;
  }
  p {
    margin-top: 5px;
    margin-inline: 10px;
    color: #252525;
  }
`