import { Component, OnInit } from '@angular/core';
import { Catch } from 'src/app/models/catch.model';
import { CatchService } from 'src/app/_services/catch.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';


@Component({
  selector: 'app-add-catch',
  templateUrl: './add-catch.component.html',
  styleUrls: ['./add-catch.component.css']
})

export class AddCatchComponent implements OnInit {

  catch: Catch = {
    username: '',
    fishId: 0,
    gearId: 0,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  submitted = false;

  constructor(private catchService : CatchService, private tokenStorage : TokenStorageService) { }

  ngOnInit(): void {
    this.tokenStorage.getToken();
  }
  

  saveCatch(): void {
    this.tokenStorage.getToken();

    const data = {
      username: this.catch.username,
      fishId: this.catch.fishId,
      gearId: this.catch.gearId
    };

    this.catchService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCatch(): void {
    this.submitted = false;
    this.catch = {
     username: '',
      fishId: 0,
      gearId: 0,
    };
  }

}
