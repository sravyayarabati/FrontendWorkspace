import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent {
  @Input()
  uname : String;

  @Output()
  notify:EventEmitter<String>= new EventEmitter<string>();
  passData(){
    this.notify.emit("Employee info");
  }
}
