import React from "react";
import Semester from "../../utils/data_models/Semester";
import "./SubjectsCard.css";
import { FaFileLines } from "react-icons/fa6";

interface SubjectsCardProps {
  semester: Semester;
}

const SubjectsCard: React.FC<SubjectsCardProps> = ({ semester }) => {
  return (
    <div className="SubjectsCardContainer">
      <h2 className="SemesterName">{semester.title}</h2>
      <div className="SubjectsCard animate">
        <div className="SubjectsCardContent">
          <ul>
            {semester.subjects.map((subject, index) => (
              <li key={index}>
                <a href={subject.link} target="_blank" rel="noopener noreferrer">
                  <FaFileLines className="icon" />
                  {subject.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubjectsCard;
