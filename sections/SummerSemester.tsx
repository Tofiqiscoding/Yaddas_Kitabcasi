"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function SummerSemester() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Yay semestrinin təşkili</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}