import {Injectable} from '@angular/core';
import {Hero} from "../hero";
import {HEROES} from "../mock-heroes";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  topHeroes: Hero[] = [];
  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getTopOfHeroes(): Hero[] {
    this.getHeroes().subscribe(heroes => this.topHeroes = heroes.slice(1, 5));
    this.messageService.add('HeroService: fetched TOP of heroes');
    return this.topHeroes;
  }

  getHeroById(id: number): Observable<Hero>{
    const hero = HEROES.find(h=>h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id: ${hero.id}`);
    return of(hero);
  }
}
