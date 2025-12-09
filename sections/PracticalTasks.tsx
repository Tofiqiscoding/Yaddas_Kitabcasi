"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function PracticalTasks() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Praktiki xarakterli tapşırıqların qiymətləndirilməsi</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}