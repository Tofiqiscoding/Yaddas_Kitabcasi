"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function ExchangePrograms() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Mübadilə proqramları</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}