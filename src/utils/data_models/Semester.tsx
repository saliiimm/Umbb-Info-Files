import Subject from "./Subject";

export default class Semester {
    name: string;
    subjectsList: Array<Subject>;

    constructor(semesterName: string, subjectsList: Array<Subject>) {
        this.name = semesterName;
        this.subjectsList = subjectsList;
    }
}
