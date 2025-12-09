"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function PracticalCriteria() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Praktiki sualın qiymət meyarları</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}