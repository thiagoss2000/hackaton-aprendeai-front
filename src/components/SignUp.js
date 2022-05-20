import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Main, StyledLink } from "../assets/signUpStyled"

export default function SignUp() {
  const navigate = useNavigate()
  const [valid, setValid] = useState(true) // check if input data is valid
  const [show, setShow] = useState(false) // show password or not
  const [loading, setLoading] = useState(false) // loading API request
  // list of all inputs
  const inputs = [
    { type: "text", placeholder: "Name" },
    { type: "email", placeholder: "E-mail" },
    { type: "password", placeholder: "Password (6+ characters)" },
    { type: "password", placeholder: "Confirm Password (6+ characters)" },
    { type: "text", placeholder: "Address" },
    { type: "number", placeholder: "Street Number" },
    { type: "text", placeholder: "Complement" },
  ]

  function submitForm(e) {
    e.preventDefault()
    setLoading(true)
    const URI = "http://localhost:5000/sign-up"

    if (e.target[2].value !== e.target[3].value) {
      setValid(false)
      setLoading(false)
      return
    }

    const body = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      confirmPassword: e.target[3].value,
      address: e.target[4].value,
      number: e.target[5].value,
    }
    if (e.target[6].value) {
      body.complement = e.target[6].value
    }

    const promisse = axios.post(URI, body)
    promisse.then((response) => {
      navigate("/")
    })
    promisse.catch((e) => {
      setValid(false)
      setLoading(false)
    })
  }

  function showPassword(e) {
    if (e.target.checked) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  return (
    <Main>
      <h1>Aprende ai</h1>
      <form onSubmit={(e) => submitForm(e)}>
        {inputs.map((i) => {
          return (
            <input
              key={i.placeholder}
              type={i.type === "password" && show ? "text" : i.type}
              placeholder={i.placeholder}
              minLength={i.type === "password" ? "6" : ""}
              required={i.placeholder === "Complement" ? false : true}
            />
          )
        })}
        <div>
          <input type="checkbox" id="show" className="checkbox" onClick={(e) => showPassword(e)} />
          <label htmlFor="show">Show password</label>
        </div>
        <button
          type="submit"
          style={loading ? { opacity: 0.6, cursor: "auto" } : {}}
          disabled={loading ? true : false}
        >
          Enter
        </button>
      </form>
      <StyledLink to={"/"}>Alreary have an account? Sign-in!</StyledLink>
      {valid ? <></> : <p>Failed to create account...</p>}
    </Main>
  )
}
