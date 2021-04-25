import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.css']
})
export class Q3Component implements OnInit {
  Q1form:FormGroup;
  phoneCount = [];
  control:FormControl;
  obj=[];
  constructor() { }

  ngOnInit(): void {
    this.Q1form = new FormGroup({
      indexControl : new FormArray([])
     });
    this.control = new FormControl(null);
      (<FormArray>this.Q1form.get('indexControl')).push(this.control);
  }
  
  AddAnotherPhoneNumber(){
    this.control = new FormControl(null);
    this.phoneCount.push(1);
   
     
      (<FormArray>this.Q1form.get('indexControl')).push(this.control);
   
  }
  Submit(){
   
    this.Q1form.get('indexControl').value.forEach((item,index)=>{
    this.obj.push({['PhoneNumber'+(index+1)]  : item});
console.log(this.obj,index);
    });

  }
}
