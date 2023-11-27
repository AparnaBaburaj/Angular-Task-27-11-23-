import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp-personal-details',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,FormsModule],
  templateUrl: './emp-personal-details.component.html',
  styleUrl: './emp-personal-details.component.scss'
})
export class EmpPersonalDetailsComponent {
  personalDetails :any[]=[];

  constructor(private empService :EmployeeService){

  }
  ngOnInit():void{
   
    this.personalDetails= this.empService?.getPersonalDetails();
  }

}
