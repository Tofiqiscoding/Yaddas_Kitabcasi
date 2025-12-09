"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function RightsDuties() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Tələbənin hüquq və vəzifələri</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}