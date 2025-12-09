"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function DisciplineResponsibility() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>İntizamın pozulmasına görə məsuliyyət</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}