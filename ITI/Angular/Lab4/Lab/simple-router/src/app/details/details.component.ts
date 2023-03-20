import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id : any

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
  }
}
