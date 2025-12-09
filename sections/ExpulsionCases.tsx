"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function ExpulsionCases() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Universitetdən xaric edilmə halları</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}