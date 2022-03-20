import { Component, OnInit } from '@angular/core';
import { RecipeModel } from "../../core/models/recipe/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel(
      'Pierogi',
      'Pyszne pierogi',
      'https://gfx.stylzycia.radiozet.pl/var/radiozetstylzycia/storage/images/kuchnia/przepisy/pierogi-z-kasza-gryczana-i-twarogiem-latwy-przepis-na-pierogi-z-kasza-gryczana-i-twarogiem-pomysl-na-obiad/10385844-7-pol-PL/Pierogi-z-kasza-gryczana-i-twarogiem-to-pyszna-propozycja-na-obiad.-Poznaj-ten-latwy-przepis_article.jpg' +
      ''),
    new RecipeModel(
      'Pierogi',
      'Pyszne pierogi',
      'https://gfx.stylzycia.radiozet.pl/var/radiozetstylzycia/storage/images/kuchnia/przepisy/pierogi-z-kasza-gryczana-i-twarogiem-latwy-przepis-na-pierogi-z-kasza-gryczana-i-twarogiem-pomysl-na-obiad/10385844-7-pol-PL/Pierogi-z-kasza-gryczana-i-twarogiem-to-pyszna-propozycja-na-obiad.-Poznaj-ten-latwy-przepis_article.jpg' +
      '')
  ];
  constructor() { }

  ngOnInit(): void {

  }

}

