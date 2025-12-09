"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function PracticeOrganization() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Təcrübənin təşkili</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}