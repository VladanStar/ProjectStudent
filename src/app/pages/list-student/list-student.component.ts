import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
})
export class ListStudentComponent implements OnInit {
  Student!: Student[];
  constructor(private studentService: StudentService) {}

  removeStudent(Student: any) {
    if (confirm('Are you sure delete item' + Student.name)) {
      this.studentService.deleteStudent(Student);
    }
  }

  ngOnInit() {
    this.studentService.getStudentList().subscribe((res) => {
      this.Student = res.map((e) => {
        return {
          id: e.payload.doc.data() as {},
        } as Student;
      });
    });
  }
}
