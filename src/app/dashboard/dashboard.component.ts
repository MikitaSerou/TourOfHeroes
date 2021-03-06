import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../service/hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topHeroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.topHeroes = this.heroService.getTopOfHeroes();
  }


}
