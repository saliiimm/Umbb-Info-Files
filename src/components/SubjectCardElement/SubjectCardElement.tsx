import "./SubjectCardElement.css"
import SubjectInterface  from "../../utils/data_models/SubjectInterface";

const SubjectCardElement: React.FC<SubjectInterface> = ({ subject }) => {
    return (
        <div className="CardElement">
            <a href={subject.link} target="_blank">
                {subject.name}    
            </a>
        </div>
    );
};


export default SubjectCardElement