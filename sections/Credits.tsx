"use client";

import { useEffect, useState } from "react";

const defaultText = `
Təhsil prosesi kredit sistemi əsasında təşkil olunur. Hər fənnin müəyyən
kredit dəyəri var və tələbə tədris ili üzrə minimal kredit tələblərini
ödəməlidir.

Qiymətləndirmə isə semestr ərzində toplanan bal və yekun imtahan
nəticələrinin birləşməsi əsasında aparılır.
`;

const Credits = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("creditsText");
    if (saved && saved.trim().length > 0) {
      setText(saved);
    }
  }, []);

  return (
    <div className="section">
      <h2>Kredit sistemi</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default Credits;
