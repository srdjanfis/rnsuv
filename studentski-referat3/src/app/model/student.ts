export class Student {
  constructor(
    public name: string,
    public lastName: string,
    public idNumber: number,
    public imageUrl: string,
    public studyProgram: string,
    public noOfExams: number,
    public noOfExamsLeft: number,
    public fullTimeStudent: boolean){

  }
}
