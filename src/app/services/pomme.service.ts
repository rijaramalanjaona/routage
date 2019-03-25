import { Injectable } from '@angular/core';
import { Pomme } from '../models/pomme';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import 'rxjs/add/observable/of';

@Injectable()
export class PommeService {
  liste: Pomme[];

  constructor() {
    this.liste = this.getMockedPomme();
  }

  getMockedPomme(): Pomme[] {
    const tmp: Pomme[] = new Array();
    for (let i = 1; i <= 100; i++) {
      tmp.push(
        {
          id: i,
          name: 'name' + i,
          isDessert: (i % 2 === 0) ? true : false,
          isCookable: (i % 2 === 0) ? false : true
        }
      );
    }
    return tmp;
  }

  getAll(): Observable<Pomme[]> {
    return Observable.create(
      (observer: Subscriber<Pomme[]>) => {
        observer.next(this.liste);
    });
  }

  getPommes(skip: number, take = 10): Observable<Pomme[]> {
    return Observable.of(this.liste.slice(skip, skip + take));
  }

  getPomme(id: number): Observable<Pomme> {
    return Observable.of(this.liste.find(pomme => pomme.id === id));
  }

}
