import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {HeroService} from "../service/hero.service";
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  /*@Input() */
  hero?: Hero;

  constructor(private route: ActivatedRoute, private location: Location, private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroById(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void{
    this.location.back();
  }
}
