import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    let role = "user";

    if (username === "admin" && password === "1234") {
      role = "admin";
    }

    const userData = { username, role };
    localStorage.setItem("user", JSON.stringify(userData));

    onLogin(userData);
  };

  return (
    <div className="container">
      <h2>🔐 Login</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>เข้าสู่ระบบ</button>
    </div>
  );
}