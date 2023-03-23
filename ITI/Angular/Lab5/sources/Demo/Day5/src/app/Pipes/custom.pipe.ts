import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    console.log(value, args)//args==> ['/']
    // var newArg;
    // if(args[0]){
    //   newArg = args[0];
    // }else{
    //   newArg = "*"
    // }
    // return value.split("").join(newArg);//[a,h,m,e,d]
    return value.split("").join(args[0]||"*");//[a,h,m,e,d]
  }

}
