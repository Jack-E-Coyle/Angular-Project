import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, map, repeat, tap } from 'rxjs/operators'
import { AngularFirestore, AngularFirestoreCollection } from  '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notesDataCollection: AngularFirestoreCollection<Note>;

  // notesData!:Observable<Note[]>;
  // allNotesData!:Note[];

  constructor(private store: AngularFirestore) {
    this.notesDataCollection = store.collection<Note>('notes');
   }

  //__________CREATE

  //: Observable<Note> 

  addNote(noteDetails: Note){

    console.log("In addNote");

    return this.notesDataCollection.add({title : noteDetails.title, text : noteDetails.text});

    //return this.store.collection('notes').doc(note.id).update({title: this.title, text: this.text});
  }

  //__________READ

  // getNotes(): Observable<Note[]> {

  // }

  //__________UPDATE

  editNote(note: Note) {
    this.store.collection('notes').doc(note.id).update({title : note.title, text : note.text});
  }

//__________DELETE

  deleteNote(note: Note) {
    this.store.collection('notes').doc(note.id).delete();
  }

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

