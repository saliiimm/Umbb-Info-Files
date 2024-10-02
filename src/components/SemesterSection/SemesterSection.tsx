import "./SemesterSection.css"
import SubjectsCard from "../../components/SubjectsCard/SubjectsCard";
import Subject from "../../utils/data_models/Subject";
import Semester from "../../utils/data_models/Semester";
import { useState } from "react";

const SemesterSection = () => {
  ////TODO : REPLACE THIS 
  const data= [new Subject("Algo","https://drive.algo.ex"),new Subject("Algo","https://drive.algo.ex"),new Subject("Algo","https://drive.algo.ex")
    ,new Subject("Algo","https://drive.algo.ex"),new Subject("Algo","https://drive.algo.ex"),new Subject("Algo","https://drive.algo.ex")
  ];

  const semester = new Semester("S1",data);
  const semester2 = new Semester("S2",data);
  /*/*/
  
  const semesters = [semester,semester2]
  var [index, setIndex] = useState(0);
  return (
    <section className="SemesterSection">
      <div  className="slider">
          <img src="src/assets/prev.svg" onClick={()=>setIndex(index > 0 ? --index : semesters.length - 1) }/>
          <SubjectsCard semester={semesters[index]} />
          <img src="src/assets/next.svg" onClick={()=>setIndex(index++ % (semesters.length))}/>
      </div>
    </section>
  );
};

export default SemesterSection;