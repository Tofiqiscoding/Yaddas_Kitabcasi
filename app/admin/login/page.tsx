"use client";

import { useState } from "react";
import "../../globals.css";
import "./login.css";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (user === "admin" && pass === "admin") {
      localStorage.setItem("adminLogged", "true");
      router.push("/admin");
    } else {
      setError("İstifadəçi adı və ya şifrə yanlışdır.");
    }
  };

  return (
    <section className="login-wrapper">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Admin Login</h2>

        <input
          type="text"
          placeholder="İstifadəçi adı"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="Şifrə"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        {error && <p className="login-error">{error}</p>}

        <button type="submit">Daxil ol</button>
      </form>
    </section>
  );
}
