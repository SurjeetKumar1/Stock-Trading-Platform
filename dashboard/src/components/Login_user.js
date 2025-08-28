import React, { useState, useContext, useEffect } from 'react';
import "./Login_user.css";
import { AuthContext } from './Context';
import { useNavigate } from 'react-router-dom';
import { Zerodha } from '../config';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, isAuthenticated } = useContext(AuthContext);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate("/");
    }
  }, [loading, isAuthenticated, navigate]);
  

  const login = async () => {
    setError(""); 
    setLoading(true);
    try {
      const response = await handleLogin(email, password);
      if (response.success) {
        navigate("/");
      }
      setError(response.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Container">
      <div className="loginContainer">
        <div className="LogoConatiner">
          <img src="/logo.png" alt="Kite Logo" />
          <p>Login to Kite</p>
        </div>

        {error && <p style={{color:"red"}} className="error">{error}</p>} 
        
        <input 
          type="text" 
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        
        <button onClick={login} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>

      <footer>
        <div className='signup' style={{display:"flex"}}>
          <span>Don't have an account?</span>
          <a 
          target="_blank"
            rel="noopener noreferrer"
            style={{ outline: "none", color: "#ff531a", textDecoration: "none" }} 
            href={`${Zerodha}/signup`}
            // href='http://localhost:3000/signup'
          >
            <span>Signup now!</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Login;
