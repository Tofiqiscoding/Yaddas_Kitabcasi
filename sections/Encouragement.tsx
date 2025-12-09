"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function Encouragement() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Təhsildə müvəffəqiyyətə görə həvəsləndirmə</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}