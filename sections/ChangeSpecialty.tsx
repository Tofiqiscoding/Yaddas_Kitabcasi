"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function ChangeSpecialty() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Təhsil müəssisəsinin / ixtisasın / təhsilalma formasının dəyişdirilməsi</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}