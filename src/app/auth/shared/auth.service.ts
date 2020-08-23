import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from 'src/app/user/model/user.model';
import{ AngularFireAuth } from '@angular/fire/auth';
import { from, Observable, throwError, } from 'rxjs';
import { switchMap, catchError, switchMapTo } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userCollection: AngularFirestoreCollection<User> = this.afs.collection('users')
constructor(private afs:AngularFirestore,
  private afAuth: AngularFireAuth,
private http:HttpClient) { }


  register(user: User): Observable<boolean>{

 return from(this.afAuth.createUserWithEmailAndPassword(user.email, user.password))
 .pipe(switchMap((u:firebase.auth.UserCredential)=>
  this.userCollection.doc(u.user.uid).set({...user, id:u.user.uid}).then(()=>true)
  ),
  catchError((error)=> throwError(error))
)

}



login(email:string, password:string):Observable<User>{
 return from(this.afAuth.signInWithEmailAndPassword(email, password))
 .pipe(
   switchMap((u:firebase.auth.UserCredential)=>this.userCollection.doc<User>(u.user.uid).valueChanges()),
   catchError(()=>throwError('Credenciais invalidas')
   )
 )


}


logout(){
  this.afAuth.signOut();
}
}
