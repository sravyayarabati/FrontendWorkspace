import { Component } from '@angular/core';

@Component({
  selector: 'emps',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  emps:any[];
  constructor() {
    this.emps=[
      {empcode:'emp101',name:"akash",dateOfBirth:'10/11/1993',gender:"male",sal:12000.123},
     {empcode:'emp102',name:"pranay" ,dateOfBirth:'08/23/1990',gender:"male",sal:22000.123},
    {empcode:'emp103',name:"srikanth", dateOfBirth:'06/11/1991',gender:"male", sal:32000.121},
    {empcode:'emp104',name:"deepa" ,dateOfBirth:'07/15/1988',gender:"female",sal:42000.900},
    {empcode:'emp105',name:"ramya" ,dateOfBirth:'06/19/1993',gender:"female",sal:200000.63125}
      ];
   }
}
