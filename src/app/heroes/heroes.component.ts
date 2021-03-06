import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../service/hero.service";
import {MessageService} from "../service/message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroesFromService();
  }

  getHeroesFromService(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }
}
