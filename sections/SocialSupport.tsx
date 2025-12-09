"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function SocialSupport() {
  const data = useUniversity();
  
  return (
    <div className="section">
      <h2>Sosial həssas qruplar üçün təhsil haqqı dəstəyi</h2>
      <p>{data.studentOrientedSystem || "Default mətn..."}</p>
    </div>
  );
}