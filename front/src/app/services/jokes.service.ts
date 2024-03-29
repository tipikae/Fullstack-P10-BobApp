import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Joke } from '../model/joke.model';

/**
 Joke service.
 */
@Injectable({
  providedIn: 'root'
})
export class JokesService {

  private pathService = 'api/joke';

  private subject: BehaviorSubject<Joke | null> = new BehaviorSubject<Joke | null>(null);

  /**
   Constructor.
   */
  constructor(private httpClient: HttpClient) {
    this.getRandomJoke();
  }

  /**
   Get a joke randomly.
   */
  public getRandomJoke(): void {
    this.httpClient.get<Joke>(this.pathService).subscribe((joke: Joke) => this.subject.next(joke));
  }

 /**
  Get joke as observable.
  */
  public joke$(): Observable<Joke | null > {
    return this.subject.asObservable();
  }
}
