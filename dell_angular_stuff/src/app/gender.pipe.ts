import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(name:String,gender:String) :String  {
    if(gender=="male"){
        return "Mr."+name;
    }
    else
    {
      return "Mrs."+name;
    }
  }

}
