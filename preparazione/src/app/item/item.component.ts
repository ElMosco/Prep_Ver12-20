import { Component, OnInit } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { FoodService } from '../food.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  obs: Observable<Object>;
  foodServiceObs: Observable<Object>;
  prodotto: any;

  constructor(
    public food : FoodService,
    private route: ActivatedRoute,
    private service: FoodService,
    private location : Location,

  ) { }

  ngOnInit(): void {
    this.obs = this.route.paramMap;
    this.obs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params : ParamMap) =>
  {
    let foodId = params.get('id');
    console.log(foodId);

    this.foodServiceObs = this.service.getFoodId(foodId);
    this.foodServiceObs.subscribe((data)=>this.prodotto = data);
  }

}
