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
      setLoading(true);
      setMessage("")
        e.preventDefault();
        try {
          // const response = await axios.post(`${DB_URL}/signup`, {
          //   name,
          //   lastName,
          //   email,
          //   password,
          // });
          const response = await axios.post(
            `${DB_URL}/signup`,
            { name, lastName, email, password },
            { withCredentials: true }   
          );
          
          if(response.data.Message){
            navigate("/login_zerodha_kite")
          }
          console.log("cxcasdas",response)
          setMessage(response.data.Message); 
      
        } catch (err) {

          console.error("Signup error:", err.response?.data || err.message);
          console.log(err.response);
          setMessage(err.response?.data?.Error || "Something went wrong");  // fallback
        }finally{
          setLoading(false);
        }
      };
      // const handleSubmit = async (e) => {
      //   e.preventDefault();
      //   setLoading(true);
      //   setMessage("");
      
      //   try {
      //     const response = await axios.post(
      //       `${DB_URL}/signup`,
      //       { name, lastName, email, password },
      //       { withCredentials: true }
      //     );
      
      //     if (response.data.Message) {
      //       navigate("/login_zerodha_kite");
      //     }
      //     setMessage(response.data.Message);
      
      //   } catch (err) {
      //     console.error("Signup error:", err.response?.data || err.message);
      //     setMessage(err.response?.data?.Message || err.message || "Something went wrong");
      //   } finally {
      //     setLoading(false);
      //   }
      // };
      
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
            {message && <div style={{color:"red", marginBottom:"1rem"}}>{message}</div>}
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control px-4 py-2 shadow-none"
                    placeholder="Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control px-4 py-2 shadow-none"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
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
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control px-4 py-2 shadow-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className=" signupBtn">
                {loading?"Sign Up ....":"Sign Up"}
              </button>
              <div>
              <div className='AlreadyAccount'>Already have an account?&nbsp;
                <a
                target="_blank"
                rel="noopener noreferrer"
                href={`${zerodha_kite}/login`} >Zerodha Kite</a>
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
