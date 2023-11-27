import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp-official-details',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,FormsModule],
  templateUrl: './emp-official-details.component.html',
  styleUrl: './emp-official-details.component.scss'
})
export class EmpOfficialDetailsComponent {
  officialDetails :any[]=[];

  constructor(private emp1Service :EmployeeService){
    

  }
  ngOnInit():void{
    
    this.officialDetails= this.emp1Service?.getOfficialDetails();
    
  }

}
