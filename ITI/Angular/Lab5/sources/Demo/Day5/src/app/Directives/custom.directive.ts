import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private myRef:ElementRef) {
    console.log(myRef);
    myRef.nativeElement.style.color = "red";
    myRef.nativeElement.style.backgroundColor = "yellow";
  }



  @HostListener('click') click() {
    this.myRef.nativeElement.style.color = this.colorObj.fgColor;
    this.myRef.nativeElement.style.backgroundColor = this.colorObj.bgColor;
  }

  @Input('appCustom') colorObj:any;

}
