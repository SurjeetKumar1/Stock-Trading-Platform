import React from "react";
import "./loginKite.css"
import { zerodha_kite } from "../../config";

export default function LoginKite() {
  return (
    <div className="loginContainer">
      <div className="login-card">
        <h3 className="lk-title">Account Created Successfully</h3>
        <p className="lk-text">
          Your Zerodha account has been created. You can now log in to Kite to
          start investing and trading.
        </p>

        <a
          // href="http://localhost:3001/login"
          href={`${zerodha_kite}/login`}
          className="KiteLoginBtn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Zerodha Kite
        </a>
      </div>
    </div>
  );
}
