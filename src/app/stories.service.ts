import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Story } from './stories';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  constructor(private http: HttpClient) { }

  private storyUrl = 'api/stories'; // URL to web api(:base/:collection)

  /**
   * GET Stories from the Server
   */
  getStories(): Observable<Story[]> {
    console.log('Getting all stories from API');
    return this.http.get<Story[]>(this.storyUrl)
      .pipe(
        tap(_ => console.log('fetched stories')),
        catchError(this.handleError<Story[]>('getStories', []))
      );
  }

  // Handle Http operation that failed.
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}
}
