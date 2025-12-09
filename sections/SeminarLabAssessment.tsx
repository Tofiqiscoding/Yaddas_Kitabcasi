"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function SeminarLabAssessment() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Seminar / laboratoriya & layihələr</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}