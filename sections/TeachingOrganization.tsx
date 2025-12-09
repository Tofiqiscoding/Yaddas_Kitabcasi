"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function TeachingOrganization() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Tədrisin təşkili</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}