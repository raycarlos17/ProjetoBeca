import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Sugestion} from './model/sugestion.model'
import { AuthService } from '../auth/shared/auth.service';
import { SugestionService } from './shared/sugestion.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DropzoneService } from '../dropzone/shared/dropzone.service';

@Component({
  selector: 'app-sugestion',
  templateUrl: './sugestion.component.html',
  styleUrls: ['./sugestion.component.css']
})
export class SugestionComponent implements OnInit {

  private file: FileList[];
  sugestionForm: FormGroup = this.fb.group({
    'type': ['', [Validators.required]],
    'comment': ['', [Validators.required]],
  })


  constructor(private fb: FormBuilder,
    private auhtService: AuthService,
    private sugestioService: SugestionService,
    private snackBar: MatSnackBar,
    private dropzone:DropzoneService
  ) { }

  ngOnInit(): void {
  }


  onDropFiles(file:FileList) {

   // this.dropzone.uploadFiles(file.item(0))
    this.file.push
  }
  onSubmit() {

    this.auhtService.getUser().subscribe((u) => {

      const newSuges: Sugestion = {
        type: this.sugestionForm.value.type,
        comment: this.sugestionForm.value.comment,
        uploud: '',
        idUser: u.id,
        data: Date.now()
      }

     // this.sugestioService.addSugestion(newSuges)
    })
  }
}
