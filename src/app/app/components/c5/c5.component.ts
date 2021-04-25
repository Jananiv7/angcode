import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-c5',
  templateUrl: './c5.component.html',
  styleUrls: ['./c5.component.css']
})
export class C5Component implements OnInit, DoCheck {
  c5form:FormGroup;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.c5form = new FormGroup({
      indexControl:new FormControl()
    });
  }
  ngDoCheck(){
this.dataService.data.next(this.c5form.get('indexControl').value);
  }

}
