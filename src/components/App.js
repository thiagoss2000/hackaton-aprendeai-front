import React from 'react';
import { AuthProvider  } from './context.js';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./MainPage/main"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import HomePage from "./HomePage"

export default function App() {
 
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="*" element={<p>This page does not exist!</p>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
