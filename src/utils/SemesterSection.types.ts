export interface SemesterData {
    semesterName: string; 
    subjects: {
      name: string;
      link: string;
    }[];
  }
  
  export interface Speciality {
    speciality: string;
    semesters: SemesterData[];
  }
  
  export interface Year {
    year: string; 
    specialities: Speciality[];
  }
  
  export interface SemesterSectionProps {
    year: Year;
  }
  