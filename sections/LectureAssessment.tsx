"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function LectureAssessment() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Mühazirə iştirak & tematik tapşırıqlar</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}