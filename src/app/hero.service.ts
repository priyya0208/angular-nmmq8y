import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock';
import { MsgService } from './msg.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MsgService) { }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
      return of(HEROES);
  }

}