import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent implements OnInit {
  count =[];
  savecheck =false;
  iteration=0;
  xform:FormGroup;
  showInput =false;
  name = 'I can be edited';
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.xform = new FormGroup({
      info: new FormControl()
    });
  }
  Edit(){
this.showInput = true;
this.name = this.xform.get('info').value;
  }
  AddY(){
    this.iteration = this.iteration+1;
this.count.push(1);
this.savecheck =true;
this.dataService.dataforq3.next(this.iteration);

  }
  savecheckToDisableButton(event){
console.log(event)
this.savecheck =false;
  }
}
