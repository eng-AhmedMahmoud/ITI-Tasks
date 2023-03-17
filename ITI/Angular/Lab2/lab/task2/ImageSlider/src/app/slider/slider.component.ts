import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  img = document.getElementById('img');
  stop = document.getElementById('sb');
  images = [
    'assets/Images/1.jpg',
    'assets/Images/2.jpg',
    'assets/Images/3.jpg',
    'assets/Images/4.jpg',
    'assets/Images/5.jpg',
    'assets/Images/6.jpg',
  ];
  i = 0;
  interval: any;
  src: String = 'assets/Images/1.jpg';

  prevImg() {
    if (this.i <= 0) this.i = this.images.length;
    this.i--;
    this.src = this.images[this.i];
  }

  nextImg() {
    if (this.i >= this.images.length - 1) this.i = -1;
    this.i++;
    this.src = this.images[this.i];
  }

  slideImg() {
    this.interval = setInterval(()=> {
      //always use the arrow function to avoid the problem of this binding
      if (this.i >= this.images.length - 1) this.i = -1;
      this.i++;
      this.src = this.images[this.i];
    }, 1000);
  }

  stopImg() {
    clearInterval(this.interval);
  }
}
