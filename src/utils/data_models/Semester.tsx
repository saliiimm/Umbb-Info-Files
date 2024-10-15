// utils/data_models/Semester.ts
import Subject from "./Subject";

export default class Semester {
  title: string;
  subjects: Subject[];
  year:string;

  constructor(title: string, subjects: Subject[], year:string) {
    this.title = title;
    this.subjects = subjects;
    this.year = year;
  }
}
