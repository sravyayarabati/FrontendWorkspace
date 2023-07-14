import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  myForm:FormGroup;

  constructor(private fb:FormBuilder){

  }
  Data:Array<any>=[
    {name:'Telugu', value:'telugu'},
    {name:'Hindi', value:'hindi'},
    {name:'English', value:'english'},
    {name:'Kannada', value:'kannada'}
  ]
  OnChangeControlEvent(item){

  }
ngOnInit(){
/*   this.myForm=new FormGroup({
    Name:new FormControl('Dell User'),
  phoneNumber:new FormControl(''),
  password:new FormControl(''),
  email:new FormControl(''),
  remember:new FormControl(''),
  cfmpassword:new FormControl(''),
  address:new FormControl('')

  }); */

  this.myForm=this.fb.group({
    Name:['DellUser',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
    phoneNumber:'',
    password:'',
    email:['',[Validators.email]],
    remember:'',
    cfmpassword:'',
    address:'',
   // lang:this.fb.array([])
  })
}
onSubmit(form:FormGroup){
alert('submit clicked');
console.log(form.valid);
console.log('form.invalid :'+form.invalid);
console.log(form.value);

}
}
