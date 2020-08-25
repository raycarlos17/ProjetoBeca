import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class DropzoneService {

  constructor(private storage: AngularFireStorage) {

}
  uploadFiles(f:File) {
    let path = `Sugestao/${f.name}`;
    let task = this.storage.upload(path, f)
    task.snapshotChanges().subscribe((s) => {

    })
}
}
