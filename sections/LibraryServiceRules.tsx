"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function LibraryServiceRules() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Kitabxana xidməti qaydaları</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}