import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
public editForm!:FormGroup;
studentRef:any;

constructor(public studentService:StudentService,
  public formBuilder:FormBuilder,
  private act:ActivatedRoute,
  private router:Router){

    this.editForm=formBuilder.group({
      name:[''],
      email:[""],
      student_course:[""],
      fees:['']
      })
  }
ngOnInit(): void {
const id=this.act.snapshot.paramMap.get('id');

this.studentService.getStudentDoc(id).subscribe(res=>{
  this.studentRef=res;
  this.editForm=this.formBuilder.group({
name:[this.studentRef.name],
email:[this.studentRef.email],
student_course:[this.studentRef.student_course],
fees:[this.studentRef.fees]


  })

})

}

onSubmit() {
  console.log('Vladan');
  const id=this.act.snapshot.paramMap.get('id');
this.studentService.updateStudent(this.editForm.value, id)
console.log(this.editForm)
}
}
