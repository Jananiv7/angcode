import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
dynamicText;
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.data.subscribe(res=>{
this.dynamicText = res;
    })
  }

}
