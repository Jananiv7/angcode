import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component implements OnInit {
  indexControl = new FormControl();
  data;
  result;
  Q1form :FormGroup
  constructor() { }

  ngOnInit(): void {
   this.data = [{0:2},{1:3},{2:10},{3:15},{4:26},{5:35},{6:50},{7:63},{8:82}];
   this.Q1form = new FormGroup({
    indexControl : new FormControl()
   });
  }
  getResult(){
    this.result = null;
   
  const data = Number(this.Q1form.get('indexControl').value)+1;
  console.log(this.result,data);
    // this.data.forEach((item)=>{
     
    //  if(Object.keys(item)[0] ===this.Q1form.get('indexControl').value) 
    // {
    //   console.log(this.Q1form.get('indexControl').value,this.Q1form.get('indexControl').value);
    //   // this.result = Object.values(item)[0];
    //     this.result = Object.values(this.data[this.Q1form.get('indexControl').value]);
    //   }
    // });

    if(data%2 === 0){
this.result = (data*data)-1;
    } else{
      this.result = (data*data)+1;
    }
  }
  Clear(){
    this.Q1form.patchValue({indexControl:null});
  }

}
