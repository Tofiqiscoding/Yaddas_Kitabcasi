"use client";

import { useState, useEffect } from "react";
import "./admin.css";

export default function AdminPage() {
  // Login üçün statelar
  const [isLogged, setIsLogged] = useState(false);
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [loginError, setLoginError] = useState("");

  // Panel üçün statelar (bölmə mətnləri)
  const [uniText, setUniText] = useState("");
  const [rightsText, setRightsText] = useState("");
  const [dutiesText, setDutiesText] = useState("");
  const [creditsText, setCreditsText] = useState("");
  const [saved, setSaved] = useState(false);

  // Login yoxlama
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (loginUser === "admin" && loginPass === "admin") {
      setIsLogged(true);
      setLoginError("");
      setLoginUser("");
      setLoginPass("");
    } else {
      setLoginError("İstifadəçi adı və ya şifrə yanlışdır.");
    }
  };

  // Login olandan sonra localStorage-dan mövcud mətnləri oxu
  useEffect(() => {
    if (!isLogged) return;
    if (typeof window === "undefined") return;

    const u = localStorage.getItem("uniText") || "";
    const r = localStorage.getItem("rightsText") || "";
    const d = localStorage.getItem("dutiesText") || "";
    const c = localStorage.getItem("creditsText") || "";

    setUniText(u);
    setRightsText(r);
    setDutiesText(d);
    setCreditsText(c);
  }, [isLogged]);

  // Tək sahəni yadda saxla (boşdursa sil, yoxsa tam olaraq yaz)
  const saveField = (key: string, value: string) => {
    if (typeof window === "undefined") return;
    const trimmed = value.trim();

    if (trimmed === "") {
      // Boş qoyublarsa, localStorage-dan sil
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, trimmed);
    }
  };

  // Hamısını yadda saxla
  const handleSave = () => {
    saveField("uniText", uniText);
    saveField("rightsText", rightsText);
    saveField("dutiesText", dutiesText);
    saveField("creditsText", creditsText);

    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  // Login olmayıbsa – yalnız login formu göstər
  if (!isLogged) {
    return (
      <section className="admin-wrapper">
        <h2 className="admin-title">Admin giriş</h2>
        <p className="admin-note">
          Admin panelə daxil olmaq üçün istifadəçi adı və şifrəni daxil et.
        </p>

        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            maxWidth: "320px",
          }}
        >
          <input
            type="text"
            placeholder="İstifadəçi adı"
            value={loginUser}
            onChange={(e) => setLoginUser(e.target.value)}
            className="admin-textarea"
            style={{ resize: "none" }}
          />
          <input
            type="password"
            placeholder="Şifrə"
            value={loginPass}
            onChange={(e) => setLoginPass(e.target.value)}
            className="admin-textarea"
            style={{ resize: "none" }}
          />

          {loginError && (
            <span style={{ color: "red", fontSize: "13px" }}>{loginError}</span>
          )}

          <button type="submit" className="admin-save-btn">
            Daxil ol
          </button>
        </form>
      </section>
    );
  }

  // Login olunubsa – admin paneli göstər
  return (
    <section className="admin-wrapper">
      <h2 className="admin-title">Admin panel</h2>
      <p className="admin-note">
        Buradan əsas səhifədə görünən mətnləri <b>birbaşa düzəldə</b> və{" "}
        <b>silmə</b> edə bilərsən. Boş buraxsan, həmin bölmə üzrə localStorage
        silinəcək və komponentdə default mətn qalacaq.
      </p>

      <div className="admin-form">
        {/* Universitet haqqında */}
        <div className="admin-group">
          <label className="admin-label">Universitet haqqında</label>
          <textarea
            value={uniText}
            onChange={(e) => setUniText(e.target.value)}
            rows={4}
            className="admin-textarea"
            placeholder="Universitet haqqında mətni bura yaz..."
          />
        </div>

        {/* Hüquqlar */}
        <div className="admin-group">
          <label className="admin-label">Tələbələrin hüquqları</label>
          <textarea
            value={rightsText}
            onChange={(e) => setRightsText(e.target.value)}
            rows={4}
            className="admin-textarea"
            placeholder="Hüquqlar haqqında mətni bura yaz..."
          />
        </div>

        {/* Vəzifələr */}
        <div className="admin-group">
          <label className="admin-label">Tələbələrin vəzifələri</label>
          <textarea
            value={dutiesText}
            onChange={(e) => setDutiesText(e.target.value)}
            rows={4}
            className="admin-textarea"
            placeholder="Vəzifələr haqqında mətni bura yaz..."
          />
        </div>

        {/* Kredit sistemi */}
        <div className="admin-group">
          <label className="admin-label">Kredit sistemi</label>
          <textarea
            value={creditsText}
            onChange={(e) => setCreditsText(e.target.value)}
            rows={4}
            className="admin-textarea"
            placeholder="Kredit sistemi haqqında mətni bura yaz..."
          />
        </div>

        <button onClick={handleSave} className="admin-save-btn">
          Yadda saxla
        </button>

        {saved && (
          <span className="admin-saved">
            Dəyişikliklər yadda saxlanıldı.
          </span>
        )}
      </div>
    </section>
  );
}
