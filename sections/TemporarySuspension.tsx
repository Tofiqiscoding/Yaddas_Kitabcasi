"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function TemporarySuspension() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Tələbənin təhsilini müvəqqəti dayandırması</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}