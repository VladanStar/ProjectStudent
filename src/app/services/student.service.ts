import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { AngularFireModule } from '@angular/fire/compat';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private angularFirestore:AngularFirestore) { }

getStudentDoc(id:any){
return this.angularFirestore
.collection('student-collection')
.doc(id)
.valueChanges()
}
getStudentList(){
return this.angularFirestore
.collection('student-collection')
.snapshotChanges()
}

}


