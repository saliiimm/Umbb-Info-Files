import { useState } from "react";
import SubjectsCard from "../../components/SubjectsCard/SubjectsCard";
import "./SemesterSection.css";
import Semester from "../../utils/data_models/Semester"; // Import the Semester class
import Subject from "../../utils/data_models/Subject"; // Import the Subject class

interface SemesterData {
  semesterName: string; // Renamed to avoid conflict with the Semester class
  subjects: {
    name: string;
    link: string;
  }[];
}

interface Speciality {
  speciality: string;
  semesters: SemesterData[];
}

interface Year {
  year: string; // Updated to match your JSON data
  specialities: Speciality[];
}

interface SemesterSectionProps {
  year: Year;
}

const SemesterSection = ({ year }: SemesterSectionProps) => {
  const selectedYear = year;

  const [selectedSpecialityIndex, setSelectedSpecialityIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const semesters = selectedSpecialityIndex >= 0 ? selectedYear.specialities[selectedSpecialityIndex].semesters : [];
  const [index, setIndex] = useState(0);

  // Create Semester instances from the data
  const semesterInstances = semesters.map(semesterData => {
    const subjects = semesterData.subjects.map(subjectData => 
      new Subject(subjectData.name, subjectData.link) // Create instances of Subject
    );

    return new Semester(semesterData.semesterName, subjects, selectedYear.year);
  });

  const handleNext = () => {
    if (index < semesterInstances.length - 1) {
      // Move to the next semester if not at the last one
      setAnimationClass("animate-out");
      setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
        setAnimationClass("animate-in");
      }, 500);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      // Move to the previous semester if not at the first one
      setAnimationClass("animate-out");
      setTimeout(() => {
        setIndex((prevIndex) => prevIndex - 1);
        setAnimationClass("animate-in");
      }, 500);
    } else {
      // If at the first semester and back is clicked, show last semester
      setAnimationClass("animate-out");
      setTimeout(() => {
        setIndex(semesterInstances.length - 1);
        setAnimationClass("animate-in");
      }, 500);
    }
  };

  return (
    <div className="semester-section">
      <h1 className="year-title">{selectedYear.year}</h1> {/* Year Title */}

      <div className="speciality-selection">
        {selectedYear.specialities.map((speciality: Speciality, specialityIndex: number) => (
          <button
            key={speciality.speciality}
            className={`speciality-button ${selectedSpecialityIndex === specialityIndex ? 'selected' : ''}`}
            onClick={() => {
              setSelectedSpecialityIndex(specialityIndex);
              setIndex(0); // Reset to the first semester when changing specialities
            }}
          >
            {speciality.speciality}
          </button>
        ))}
      </div>

      <div className="slider">
        <img
          className={`iconimg ${index === 0 ? 'inactive' : ''}`} // Add inactive class if at first semester
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
          className={`iconimg ${index === semesterInstances.length - 1 ? 'inactive' : ''}`} // Add inactive class if at last semester
          src="src/assets/next.svg"
          onClick={handleNext}
          alt="Next"
        />
      </div>
    </div>
  );
};

export default SemesterSection;
