import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../user/model/user.model';
import { AuthService } from '../../auth/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user$: Observable<User>;
  authenticated$: Observable<boolean>;

  constructor(private authService: AuthService,
  private router:Router) {
    this.user$ = this.authService.getUser()
    this.authenticated$ = this.authService.authenticate()
   }

  ngOnInit(): void {
  }

}
