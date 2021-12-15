import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from  '@angular/fire/compat';
import { AngularFirestoreModule } from  '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { HomeComponent } from './components/home/home.component';
import { NoteRowComponent } from './components/note-row/note-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoteListComponent,
    HomeComponent,
    NoteRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBupX0urRTuffB8lNQVnrcXihpCXSolflk",
      authDomain: "repeatproject-40cb1.firebaseapp.com",
      projectId: "repeatproject-40cb1",
      storageBucket: "repeatproject-40cb1.appspot.com",
      messagingSenderId: "1037284079460",
      appId: "1:1037284079460:web:5583bf3d08ecb06e15ac71",
      measurementId: "G-8MDERREZQB"
    }),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
