"use client";

import "./Sidebar.css";

type SectionKey = "uni" | "rights" | "duties" | "credits";

interface Props {
  activeSection: SectionKey;
  onChange: (key: SectionKey) => void;
}

export default function Sidebar({ activeSection, onChange }: Props) {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Menyu</h3>

      <button
        className={activeSection === "uni" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("uni")}
      >
        Universitet haqqında
      </button>

      <button
        className={activeSection === "rights" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("rights")}
      >
        Tələbə hüquqları
      </button>

      <button
        className={activeSection === "duties" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("duties")}
      >
        Tələbə vəzifələri
      </button>

      <button
        className={activeSection === "credits" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("credits")}
      >
        Kredit sistemi
      </button>
    </aside>
  );
}
