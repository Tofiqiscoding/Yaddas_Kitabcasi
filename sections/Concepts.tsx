"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function Concepts() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Əsas anlayışlar</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}