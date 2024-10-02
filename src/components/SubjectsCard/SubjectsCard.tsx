import './SubjectsCard.css';
import { FC } from "react";
import SemesterInterface from "../../utils/data_models/SemesterInterface";
import SubjectCardElement from "../SubjectCardElement/SubjectCardElement";


const SubjectsCard: FC<SemesterInterface> = ({semester})=>{
    return (
        <div className='SubjectsCardContainer'>
            <h3 className='SemesterName'>{semester.name}</h3>
            <ul className='SubjectsCard'>
                {semester.subjectsList.map( subject => (<SubjectCardElement subject={subject} />))}
            </ul>
        </div>
    )
}

export default SubjectsCard