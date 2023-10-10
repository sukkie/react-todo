import { useState } from "react";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const [username, setUsername] = useState("oykwon");
  const [password, setPassword] = useState("");

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const navigate = useNavigate();

  const authContext = useAuth();

  function handleUsernameChange(event) {
    console.log(event);
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    console.log(event);
    setPassword(event.target.value);
  }

  async function handleSubmit() {
    if (await authContext.login(username, password)) {
      navigate(`/welcome/${username}`);
      // navigate("/welcome/" + username);
    } else {
      setShowErrorMessage(true);
    }
  }

  return (
    <div className='Login'>
      {/* <SuccessMessageComponent /> */}
      {/* <ErrorMessageComponent /> */}
      {showErrorMessage && (
        <div className='errorMessage'>
          Authenticated Failed, Please check your credentials.
        </div>
      )}
      <h1>Login Component</h1>
      <div className='LoginForm'>
        <div>
          <label>UserName</label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type='button' name='login' onClick={handleSubmit}>
            login
          </button>
        </div>
      </div>
    </div>
  );
}
