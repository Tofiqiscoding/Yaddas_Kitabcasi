"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function StudentCentered() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Tələbəyönümlü təhsil sistemi</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}