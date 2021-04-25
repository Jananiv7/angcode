import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {
  dynamicText;
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.data.subscribe(res=>{
this.dynamicText = res;
    })
  }

}
