"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function ExamRules() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>İmtahanların təşkili və keçirilməsi qaydaları</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}