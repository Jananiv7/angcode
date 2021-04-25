import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css']
})
export class Q2Component implements OnInit {
  iteration = 0;
count = [];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  AddX(){
    this.iteration= this.iteration+1;
this.count.push(1);
this.dataService.dataforq2.next(this.iteration);
  }
}
