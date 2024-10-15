export default class Subject {
    [x: string]: string | undefined;
    name: string;
    link: string;

    constructor(subjectName: string, subjectLink: string) {
        this.name = subjectName;
        this.link = subjectLink;
    }
}
