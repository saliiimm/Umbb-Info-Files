import { SetStateAction, useState } from "react";
import SubjectsCard from "../../components/SubjectsCard/SubjectsCard";
import "./SemesterSection.css";
import Semester from "../../utils/data_models/Semester"; 
import Subject from "../../utils/data_models/Subject"; 
import { SemesterSectionProps, Speciality } from "../../utils/SemesterSection.types";

const SemesterSection = ({ year }: SemesterSectionProps) => {
  const selectedYear = year;

  const [selectedSpecialityIndex, setSelectedSpecialityIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const [index, setIndex] = useState(0);

  const semesters = selectedSpecialityIndex >= 0 ? selectedYear.specialities[selectedSpecialityIndex].semesters : [];
  const semesterInstances = semesters.map(semesterData => {
    const subjects = semesterData.subjects.map(subjectData => 
      new Subject(subjectData.name, subjectData.link) 
    );

    return new Semester(semesterData.semesterName, subjects, selectedYear.year);
  });

  const handleNext = () => {
    if (index < semesterInstances.length - 1) {
      setAnimationClass("animate-out");
      setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
        setAnimationClass("animate-in");
      }, 500);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setAnimationClass("animate-out");
      setTimeout(() => {
        setIndex((prevIndex) => prevIndex - 1);
        setAnimationClass("animate-in");
      }, 500);
    } else {
      setAnimationClass("animate-out");
      setTimeout(() => {
        setIndex(semesterInstances.length - 1);
        setAnimationClass("animate-in");
      }, 500);
    }
  };

  const handleSpecialityChange = (specialityIndex: SetStateAction<number>) => {
    setAnimationClass("animate-out");
    setTimeout(() => {
      setSelectedSpecialityIndex(specialityIndex);
      setIndex(0); 
      setAnimationClass("animate-in");
    }, 500);
  };

  return (
    <div className="semester-section">
      <h1 className="year-title">{selectedYear.year}</h1>

      <div className="speciality-selection">
        {selectedYear.specialities.map((speciality: Speciality, specialityIndex: number) => (
          <button
            key={speciality.speciality}
            className={`speciality-button ${selectedSpecialityIndex === specialityIndex ? 'selected' : ''}`}
            onClick={() => handleSpecialityChange(specialityIndex)} 
          >
            {speciality.speciality}
          </button>
        ))}
      </div>

      <div className="slider">
        <img
          className={`iconimg ${index === 0 ? 'inactive' : ''}`} 
          src="src/assets/prev.svg"
          onClick={handlePrev}
          alt="Previous"
        />
        <div className={`SubjectsCardWrapper ${animationClass}`}>
          {semesterInstances.length > 0 && (
            <SubjectsCard semester={semesterInstances[index]} />
          )}
        </div>
        <img
          className={`iconimg ${index === semesterInstances.length - 1 ? 'inactive' : ''}`} 
          src="src/assets/next.svg"
          onClick={handleNext}
          alt="Next"
        />
      </div>
    </div>
  );
};

export default SemesterSection;
