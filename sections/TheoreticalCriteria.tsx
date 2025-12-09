"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function TheoreticalCriteria() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Nəzəri sualın qiymət meyarları</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}