import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css']
})
export class EmployeehomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToUpdateEmp(){this.router.navigateByUrl('/update');}
  goToCreateEmp(){this.router.navigateByUrl('/create');}
  goToReadEmp(){this.router.navigateByUrl('/read');}
  goToDeleteEmp(){this.router.navigateByUrl('/delete');}
}
