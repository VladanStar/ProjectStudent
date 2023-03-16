import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit {
   public studentForm: FormGroup;

  // studentForm: any;
  constructor(
    public studentService: StudentService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {

this.studentForm=formBuilder.group({
name:[''],
email:[""],
student_course:[""],
fees:['']
})
  }
  ngOnInit(): void {}


  onSubmit() {
    console.log('Vladan');
this.studentService.createStudent(this.studentForm.value)
  }
}
