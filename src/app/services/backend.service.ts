import { Injectable } from '@angular/core';
import {Employee} from '../model/employee';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Message } from '../model/message';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private apiUrl = ' http://localhost:8080/';

  private auth_token = 'Bearer '+sessionStorage.getItem("accessToken");

  /*private httOptions ={
    headers: new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    })
  };*/
  
  constructor(private http: HttpClient) { }

  createEmployee(newEmployee :Employee): Observable<Message>{

    let createEmplooyee = this.apiUrl+'addemployee';

    return this.http.post<Message>(createEmplooyee , newEmployee);

  }

  readAllEmployee (){

    let readEmplooyee = this.apiUrl+'allemployees';
    console.log(readEmplooyee);
    return this.http.get(readEmplooyee);

  }

  readEmployeeByFN (firstName: string){

    let readEmplooyee = this.apiUrl+`employee/${firstName}`;
    
    /*let queryParams = {
      params: new HttpParams().set('firstName', firstName)
    };*/

    return this.http.get(readEmplooyee);

  }


  deleteEmployeeByID(employeeID: string){

    let deleteEmplooyee = this.apiUrl+`deleteEmp/${employeeID}`;
    
    return this.http.delete(deleteEmplooyee);

  }

  updateEmployee(employee){

    let updateEmplooyee = this.apiUrl+'updateEmp';

    return this.http.put(updateEmplooyee , employee);

  }

  
}
