import { Component, OnInit } from '@angular/core';
import {IngredientModel} from "../core/models/shered/ingredient.model";

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 6),
    new IngredientModel('Potatoes', 7)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
