"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function WarningCases() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Xəbərdarlığın edildiyi hallar</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}