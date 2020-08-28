import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Sugestion } from 'src/app/sugestion/model/sugestion.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {



  registros: any;

  constructor(private angularFireDataBase: AngularFireDatabase) { }

  get() {
    return this.registros;
  }

  insert(sugestion: Sugestion) {
    this.angularFireDataBase.list("sugestions").push(sugestion).then((result: any) => { console.log(result.key) });
  }

  update(sugestion: Sugestion, key: string) {
    this.angularFireDataBase.list("sugestions").update(key, sugestion);
  }

  getAll() {
    return this.angularFireDataBase.list<any>("sugestions.User")
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(data => ({ key: data.payload.key, ...data.payload.val() }));
        })
      )

  }

  delete(key: string) {
    this.angularFireDataBase.object("sugestion/" + "key").remove();
  }


}
