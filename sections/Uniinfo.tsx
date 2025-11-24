"use client";

import { useEffect, useState } from "react";

const defaultText = `
Burada universitetin yaranması, strukturu və ümumi qaydalar haqqında
məlumat veriləcək. Sonra kitabdan olan mətni bura köçürüb dəyişdirə bilərsən.
`;

const Uniinfo = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("uniText");
    if (saved && saved.trim().length > 0) {
      setText(saved);
    }
  }, []);

  return (
    <div className="section">
      <h2>Universitet haqqında məlumat</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default Uniinfo;
