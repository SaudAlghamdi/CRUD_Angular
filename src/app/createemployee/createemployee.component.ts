import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Employee} from '../model/employee';
import {BackendService} from '../services/backend.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  constructor(private backend: BackendService ) { }

  ngOnInit() {
  }

  createEmployee (form: NgForm){
    let employee = form.value;
    if (form.valid){

    let newEmployee: Employee = new Employee(
      employee.firstName,
      employee.lastName,
      employee.city, 
      employee.salary
      );
      let response: string ;
      this.backend.createEmployee(newEmployee).subscribe(
        data => {response = data.message} 
      );

      alert(response);

      }



  }

}
