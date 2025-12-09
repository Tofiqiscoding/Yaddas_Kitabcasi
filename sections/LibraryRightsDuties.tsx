"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function LibraryRightsDuties() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Kitabxananın hüquq və vəzifələri</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}