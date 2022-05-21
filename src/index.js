<<<<<<< HEAD
import ReactDOM from 'react-dom';
import App from './app';
import './assets/reset.css';
import './assets/style.css';

const root = document.querySelector(".root");
ReactDOM.render(<App />, root); 
=======
import ReactDOM from "react-dom/client"

import App from "./components/App"

import "./assets/reset.css"
import "./assets/style.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
>>>>>>> 569290be83ab095cf34750dfa3dfcffdf4b232ff
