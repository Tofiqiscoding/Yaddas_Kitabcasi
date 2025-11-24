"use client";

import { useEffect, useState } from "react";

const defaultText = `
• Keyfiyyətli təhsil almaq hüququ.
• Ədalətli və şəffaf qiymətləndirmə tələb etmək.
• Elmi və ictimai fəaliyyətlərdə iştirak etmək.
• Fikirlərini mədəni formada ifadə etmək.
`;

const Rights = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("rightsText");
    if (saved && saved.trim().length > 0) {
      setText(saved);
    }
  }, []);

  return (
    <div className="section">
      <h2>Tələbələrin hüquqları</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default Rights;
