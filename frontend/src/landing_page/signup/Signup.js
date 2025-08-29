import React, { useState } from 'react';
import "./signup.css"
import { DB_URL } from '../../config';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { zerodha_kite } from '../../config';

function Signup() {
    const [name,setName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");
    const [loading,setLoading]=useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
      
        // Basic validation
        if (!name.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
            setMessage("All fields are required");
            setLoading(false);
            return;
        }

        if (password.length < 6) {
            setMessage("Password must be at least 6 characters long");
            setLoading(false);
            return;
        }

        try {
            console.log('Attempting signup with URL:', `${DB_URL}/signup`);
            console.log('Signup data:', { name, lastName, email, password: '***' });
            
            const response = await axios.post(
                `${DB_URL}/signup`,
                { name, lastName, email, password },
                { 
                    withCredentials: true,
                    timeout: 10000, // 10 second timeout
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
        
            console.log('Signup response:', response.data);
            
            if (response.data.Message) {
                setMessage(response.data.Message);
                // Navigate after a short delay to show success message
                setTimeout(() => {
                    navigate("/login_zerodha_kite");
                }, 1500);
            }
        
        } catch (err) {
            console.error("Signup error:", err);
            
            let errorMessage = "Something went wrong";
            
            if (err.response) {
                // Server responded with error status
                errorMessage = err.response.data?.Message || `Server error: ${err.response.status}`;
                console.error('Error response:', err.response.data);
            } else if (err.request) {
                // Request was made but no response received
                errorMessage = "No response from server. Please check your connection.";
                console.error('No response received:', err.request);
            } else {
                // Something else happened
                errorMessage = err.message || "Network error occurred";
                console.error('Other error:', err.message);
            }
            
            setMessage(errorMessage);
        } finally {
            setLoading(false);
        }
    };
      
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center mb-5 mt-5">
            <h1>Open a free demat and trading account online</h1>
            <p>
              Start investing brokerage free and join a community of 1.6+ crore investors and traders
            </p>
          </div>
        </div>

        <div className="row align-items-center mt-5">
          <div className="col-md-6 mb-4">
            <img
              src="/media/images/account_open.svg"
              alt="Account Open"
              className="img-fluid"
            />
          </div>

          <div className="col-md-6">
          
            <form className="p-3 p-md-5 " onSubmit={handleSubmit}>
            {message && (
                <div 
                    style={{
                        color: message.includes("successful") ? "green" : "red", 
                        marginBottom:"1rem",
                        padding: "10px",
                        borderRadius: "5px",
                        backgroundColor: message.includes("successful") ? "#d4edda" : "#f8d7da",
                        border: `1px solid ${message.includes("successful") ? "#c3e6cb" : "#f5c6cb"}`
                    }}
                >
                    {message}
                </div>
            )}
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control px-4 py-2 shadow-none"
                    placeholder="Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control px-4 py-2 shadow-none"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control px-4 py-2 shadow-none "
                  placeholder="Email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control px-4 py-2 shadow-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                  disabled={loading}
                  minLength={6}
                />
              </div>

              <button 
                type="submit" 
                className="signupBtn"
                disabled={loading}
              >
                {loading ? "Sign Up ...." : "Sign Up"}
              </button>
              
              <div>
                <div className='AlreadyAccount'>
                  Already have an account?&nbsp;
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${zerodha_kite}/login`}
                  >
                    Zerodha Kite
                  </a>
                </div>
              </div>
            </form>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
