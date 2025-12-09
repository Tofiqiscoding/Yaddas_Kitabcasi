"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function Uniinfo() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Universitet haqqında məlumat</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}