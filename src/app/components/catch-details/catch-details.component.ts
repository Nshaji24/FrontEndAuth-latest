import { Component, OnInit } from '@angular/core';
import { Catch } from 'src/app/models/catch.model';
import { CatchService } from 'src/app/_services/catch.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-catch-details',
  templateUrl: './catch-details.component.html',
  styleUrls: ['./catch-details.component.css']
})
export class CatchDetailsComponent implements OnInit {

  currentCatch: Catch = {
   username: '',
    fishId: 0,
   gearId: 0,
  };
  message = '';

  constructor(private catchService: CatchService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getCatch(this.route.snapshot.params.id);
  }

  getCatch(id: string): void {
    this.catchService.get(id)
      .subscribe(
        data => {
          this.currentCatch = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  
  updateCatch(): void {
    this.catchService.update(this.currentCatch.id, this.currentCatch)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteCatch(): void {
    this.catchService.delete(this.currentCatch.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/catches']);
        },
        error => {
          console.log(error);
        });
  }

}
