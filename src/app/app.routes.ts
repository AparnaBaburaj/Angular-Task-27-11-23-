import { Routes } from '@angular/router';
import { EmpOfficialDetailsComponent } from './emp-official-details/emp-official-details.component';
import { EmpPersonalDetailsComponent } from './emp-personal-details/emp-personal-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        component:HomeComponent,
        path:''
    },
    
    {
        component:EmpPersonalDetailsComponent,
        path:'personal'
    },
    {
        component:EmpOfficialDetailsComponent,
        path:'official'
    },
    
];
