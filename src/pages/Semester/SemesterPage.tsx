import SubjectsCard from "../../components/SubjectsCard/SubjectsCard";
import Subject from "../../data_models/Subject";
import Semester from "../../data_models/Semester";

const SemesterPage = () => {
  ////TODO : REPLACE THIS 
  const data= [new Subject("Algo","https://drive.algo.ex"),new Subject("Algo","https://drive.algo.ex"),new Subject("Algo","https://drive.algo.ex")
    ,new Subject("Algo","https://drive.algo.ex"),new Subject("Algo","https://drive.algo.ex"),new Subject("Algo","https://drive.algo.ex")
  ];

  const semester = new Semester("S1",data);

  /*/*/

  return (
    <div>
      <SubjectsCard semester={semester} />
    </div>
  );
};

export default SemesterPage;
