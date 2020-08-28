import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Sugestion } from 'src/app/sugestion/model/sugestion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private sugestionCollection: AngularFirestoreCollection<Sugestion> = this.afs.collection('sugestions')

  constructor(private afs:AngularFirestore) { }

  get(){
    return this.sugestionCollection.valueChanges();
  }

}
