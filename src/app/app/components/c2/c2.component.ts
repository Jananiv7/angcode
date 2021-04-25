import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  dynamicText;
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.data.subscribe(res=>{
this.dynamicText = res;
    })
  }


}
