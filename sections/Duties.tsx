"use client";

import { useEffect, useState } from "react";

const defaultText = `
• Dərslərə davamiyyətə riayət etmək.
• Akademik dürüstlüyə əməl etmək.
• Nizam-intizam qaydalarına hörmət etmək.
• Universitet əmlakına qayğı ilə yanaşmaq.
`;

const Duties = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("dutiesText");
    if (saved && saved.trim().length > 0) {
      setText(saved);
    }
  }, []);

  return (
    <div className="section">
      <h2>Tələbələrin vəzifələri</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default Duties;
