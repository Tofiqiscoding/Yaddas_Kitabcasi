"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function Reinstatement() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Təhsil müəssisəsinə bərpa olunma</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}