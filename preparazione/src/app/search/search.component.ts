import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  query: string;
  obs: Observable<Object>;
  results: any;

  constructor(
    public food: FoodService,
  ) { }

  submit(query : HTMLInputElement) : void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obs = this.food.searchFood(this.query);
    this.obs.subscribe((data) => { this.results = data; console.log(this.results) });
  }




}
