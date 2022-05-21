import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./MainPage/main"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import HomePage from "./HomePage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<p>This page does not exist!</p>} />
      </Routes>
    </BrowserRouter>
  )
}
