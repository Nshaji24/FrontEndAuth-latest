import { Component, OnInit } from '@angular/core';
import { Catch } from 'src/app/models/catch.model';
import { CatchService } from 'src/app/_services/catch.service';


@Component({
  selector: 'app-catch-list',
  templateUrl: './catch-list.component.html',
  styleUrls: ['./catch-list.component.css']
})

export class CatchListComponent implements OnInit {

  catches?: Catch[];
  currentCatch?: Catch;
  currentIndex = -1;
  Angler = '';

  constructor(private catchService : CatchService) { }

  ngOnInit(): void {
    this.retrieveCatches();
  }

  retrieveCatches(): void {
    this.catchService.getAll()
      .subscribe(
        data => {
          this.catches = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveCatches();
    this.currentCatch = undefined;
    this.currentIndex = -1;
  }

  /*
  setActiveCatch(catch: Catch, index: number): void {
    this.currentCatch = catch;
    this.currentIndex = index;
  }
  */

  removeAllCatches(): void {
    this.catchService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchAngler(): void {
    this.catchService.findByAngler(this.Angler)
      .subscribe(
        data => {
          this.catches = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}
