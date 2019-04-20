import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Employee} from '../model/employee';
import {BackendService} from '../services/backend.service';

@Component({
  selector: 'app-reademployee',
  templateUrl: './reademployee.component.html',
  styleUrls: ['./reademployee.component.css']
})
export class ReademployeeComponent implements OnInit {


  @ViewChild('empid') empid: ElementRef;
  private results = false;
  private employees;

  constructor(private backend: BackendService) { }

  ngOnInit() {
  }

  readEmployees(form: NgForm){
    let emp = form.value;
    
    if(emp.firstName != '' ){

      console.log('inside firstName');
      this.backend.readEmployeeByFN(emp.firstName).subscribe(
        data => this.employees = data
      );

      if (this.employees  !=  ''  )
      this.results = true;

      else 
      alert('No Result Founded');

    }else {

      this.backend.readAllEmployee().subscribe(
        data => this.employees = data 
        );

      if (this.employees !=  ''  )
      this.results = true;

      else 
      alert('No Result Founded');

    }

  }

  readAllEmployees(){

    this.backend.readAllEmployee()
  }

  deleteEmployee(employeeID: string){
    
    this.backend.deleteEmployeeByID(employeeID).subscribe();
    this.results = false;
    alert('Empolyee:'+employeeID+' deleted Successfully');
  }

  updateEmployee(employeeID: string ,firstName: string, lastName: string, city: string, salary: string){

    let employee = {
      'employeeID':employeeID,
      'firstName':firstName,
      'lastName':lastName,
      'city':city,
      'salary':salary};

      this.backend.updateEmployee(employee).subscribe();
      this.results = false;
      alert('Empolyee:'+employeeID+' updated Successfully');

  }
 
}
