import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  personalDetails : any[]= [ { firstName: 'Aparna', lastName: 'TB', email: 'aparnatb@example.com' }];
  officialDetails : any[]= [{ employeeId: 12345, department: 'IT', position: 'Front-end Developer' }];


  constructor() { 
   
  }

 

  getPersonalDetails(): any[]{
    return this.personalDetails;
  }

  getOfficialDetails(): any[]{
    return this.officialDetails;
  }
}
