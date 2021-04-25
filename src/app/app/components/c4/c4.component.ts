import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {
  dynamicText;
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.data.subscribe(res=>{
this.dynamicText = res;
    })
  }


}
