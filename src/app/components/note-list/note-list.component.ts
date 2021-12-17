import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from  '@angular/fire/compat/firestore';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/interfaces/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  
  dataSource: any;
  filteredNotes!: Note[]
  selectedNote: any;

  noteForm!: FormGroup;
  queryForm!: FormGroup;

  message: string = "Error";

  @ViewChild('btnShow') // Open
  btnShow!: ElementRef;

  @ViewChild('btnClose')
  btnClose!: ElementRef;

  constructor(private  store: AngularFirestore, private noteService: NoteService) { }

  ngOnInit(): void {

    this.getAll();

    this.noteForm = new FormGroup({
      title: new FormControl(this.selectedNote?.title, [Validators.required, Validators.minLength(3)]),
      text: new FormControl(this.selectedNote?.text, [Validators.required, Validators.minLength(3)]),
    })

    this.queryForm = new FormGroup({
      query: new FormControl(this.selectedNote?.text)
    })
  }

  // get title() {
  //   return this.noteForm?.get('title');
  // }

  // get text() {
  //   return this.noteForm?.get('text');
  // }

  getNote()   //Searching for an individual note
  {
    // let filteredNotes = this.dataSource.find((note: Note) => note.title === this.queryForm.value.query);

    let filteredNotes = this.dataSource.filter((note: Note) => 
      note.title === this.queryForm.value.query
    );

    console.log(filteredNotes);
  }

  clicked(note: Note) {
    this.selectedNote = note;
  }

  openDialog() {
    this.btnShow.nativeElement.click();
  }

  closeDialog() {

    console.log("In close dialogue");

    this.clearEdit(); // Not clearing fields
    this.btnClose.nativeElement.click();
  }

  clearEdit() {

    console.log("In clear edit");

    this.selectedNote = "";

    console.log(this.selectedNote);
  }

  add() {
    this.noteService.addNote(this.noteForm.value); // Using Service
    console.log(this.noteForm.value);
    this.closeDialog();
  }

  edit() {

    this.noteService.editNote(this.selectedNote.id, this.noteForm.value);

    this.closeDialog();
  }

  getAll(){
    this.store.collection('notes').snapshotChanges().subscribe((response) => {
      this.dataSource = response.map(item => 
        Object.assign({id : item.payload.doc.id}, item.payload.doc.data())
      );
    })
  }
}
