import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from  '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/interfaces/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  dataSource : any;

  noteForm!: FormGroup;

  selectedNote!: Note;

  // id : any;
  // title : any;
  // text : any;

  editObj : any;

  message: string = "LOL";

  @ViewChild('btnShow')
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

  }

  clicked(note: Note): void {
    this.selectedNote = note;
    console.table(this.selectedNote)
  }

  openDialog() {
    this.btnShow.nativeElement.click();
  }

  closeDialog() {
    this.clearEdit(); // Not clearing fields
    this.btnClose.nativeElement.click();
  }

  clearEdit() {
    this.editObj = null;
    this.selectedNote == null;
  }

  add() {

    // if(this.selectedNote){
    //   this.noteService.editNote(this.noteForm?.value); // Using Service
    //   //this.store.collection('notes').doc(this.editObj.id).update({title : this.title, text : this.text});
    // } 
    // else {
      //this.store.collection('notes').add({title : this.title, text : this.text});
    // }

    console.log(this.noteForm.value);
    this.noteService.addNote(this.noteForm.value); // Using Service
    
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
