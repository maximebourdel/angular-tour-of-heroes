
import { Injectable } from '@angular/core';

import { Hero } from './hero';

import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
        setTimeout(resolve, 1500)) // delay 1,5 seconds
            .then(() => this.getHeroes());
    }
    
}

