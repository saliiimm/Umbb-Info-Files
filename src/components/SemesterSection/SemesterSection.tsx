import { useState } from "react";
import SubjectsCard from "../../components/SubjectsCard/SubjectsCard";
import Semester from "../../utils/data_models/Semester";
import "./SemesterSection.css";
import Subject from "../../utils/data_models/Subject";
import subjectsData from "../../utils/data_models/subjectsData.json";

const SemesterSection = () => {
  const semesters = subjectsData.semesters.map((sem) => {
    const subjects = sem.subjects.map(
      (sub) => new Subject(sub.name, sub.link)
    );
    return new Semester(sem.semesterName, subjects, sem.year); 
  });

  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % semesters.length);
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + semesters.length) % semesters.length);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="SemesterSection">
      <div className="slider">
        <img
          className="iconimg"
          src="src/assets/prev.svg"
          onClick={handlePrev}
          alt="Previous"
        />
        <div className={`SubjectsCardWrapper ${isAnimating ? "animate" : ""}`}>
          <SubjectsCard semester={semesters[index]} /> 
        </div>
        <img
          className="iconimg"
          src="src/assets/next.svg"
          onClick={handleNext}
          alt="Next"
        />
      </div>
    </section>
  );
};

export default SemesterSection;
