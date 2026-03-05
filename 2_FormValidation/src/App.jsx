import { useState } from "react";
import "./App.css";

const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

function App() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [show,setShow] = useState(false);
  const [success,setSuccess] = useState("");

  const startsWithCapital = /^[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[@$!%*?&]/.test(password);
  const hasLength = password.length >= 5;

  const passwordValid =
    startsWithCapital && hasNumber && hasSpecial && hasLength;

  const emailValid = EMAIL_REGEX.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(emailValid && passwordValid){
      setSuccess("Login Successful 🎉");
    }
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setSuccess("");
  };

  return (
    <div className="card">

      <div className="title">Secure Login</div>

      <form onSubmit={handleSubmit}>

        <div className="input-group">
          <label>Email</label>
          <input
            type="text"
            placeholder="username@domain.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          {email && !emailValid && (
            <p className="error">Invalid email format</p>
          )}
        </div>

        <div className="input-group">

          <label>Password</label>

          <div className="password-wrapper">

            <input
              type={show ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <span className="eye" onClick={()=>setShow(!show)}>
              {show ? "🙈" : "👁"}
            </span>

          </div>

          <ul className="rules">

            <li className={startsWithCapital ? "valid":"invalid"}>
              Start with capital
            </li>

            <li className={hasNumber ? "valid":"invalid"}>
              Contains number
            </li>

            <li className={hasSpecial ? "valid":"invalid"}>
              Contains special char
            </li>

            <li className={hasLength ? "valid":"invalid"}>
              Minimum 5 characters
            </li>

          </ul>

        </div>

        <div className="actions">

          <button
            className="submit"
            type="submit"
            disabled={!(emailValid && passwordValid)}
          >
            Submit
          </button>

          <button
            className="reset"
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>

        </div>

      </form>

      {success && <p className="success">{success}</p>}

    </div>
  );
}

export default App;