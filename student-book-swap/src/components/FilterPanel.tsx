import React from "react";

interface FilterProps {
  subject: string;
  education: string;
  setSubject: (value: string) => void;
  setEducation: (value: string) => void;
}

export const FilterPanel: React.FC<FilterProps> = ({ subject, education, setSubject, setEducation }) => {
  return (
    <div className="flex gap-4 mb-4">
      <select value={subject} onChange={(e) => setSubject(e.target.value)} className="p-2 border rounded">
        <option value="">All Subjects</option>
        <option value="Math">Math</option>
        <option value="Physics">Physics</option>
        <option value="Literature">Literature</option>
      </select>
      <select value={education} onChange={(e) => setEducation(e.target.value)} className="p-2 border rounded">
        <option value="">All Education</option>
        <option value="High School">High School</option>
        <option value="University">University</option>
      </select>
    </div>
  );
};
