"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";

import "../sections/Sections.css";
import Uniinfo from "../sections/Uniinfo";
import Rights from "../sections/Rights";
import Duties from "../sections/Duties";
import Credits from "../sections/Credits";

export default function HomePage() {
  const [active, setActive] = useState("uni");

  return (
    <div className="main-layout">
      <Sidebar activeSection={active} onChange={setActive} />

      <div className="main-content">
        {active === "uni" && <Uniinfo />}
        {active === "rights" && <Rights />}
        {active === "duties" && <Duties />}
        {active === "credits" && <Credits />}
      </div>
    </div>
  );
}
