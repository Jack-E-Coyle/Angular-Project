import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Todo } from '../interfaces/todo';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Todo[]> {

    return this.http.get<Todo[]>(this.ROOT_URL)
    .pipe(
      catchError(this.handleError)
    )
  }

    //____________________________________________________________________________________________________ ERROR HANDLING

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // Return an observable with a user-facing error message.
      return throwError(
        'Something bad happened; please try again later.');
    }

}
