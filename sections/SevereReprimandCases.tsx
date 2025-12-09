"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function SevereReprimandCases() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Sonuncu xəbərdarlıq və şiddətli töhmət halları</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}