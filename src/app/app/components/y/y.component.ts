
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { mergeMap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
// import * as writeJsonFile from 'write-json-file';

interface fin  {
  xval1:string;
    xval2:x[];
    
}
interface x{
  yval:{

  }
}
@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.css']
})
export class YComponent implements OnInit {
  Yform: FormGroup;
  savestatus = false;
  xiteration;
  obj;
  obj1={};
  fin1:fin[];
  @Output() saved = new EventEmitter();
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.savestatus = false;
    this.Yform = new FormGroup({
      info: new FormControl()
    });
  }
  save() {
    this.savestatus = true;
    this.dataService.dataforq2.pipe(mergeMap((res) => {
      if(res){
        console.log(res);
        this.xiteration = ['X'+res];
        return this.dataService.dataforq3;
      }
      
    })).subscribe(result => {
      if (result) {
        const ycom =['Y' + result].toString() ;
         let val ={};
         val={
           [this.xiteration]:{
             [ycom]:this.Yform.get('info').value
           }
           
         }
         this.obj= val;
         console.log(val);
     } });
    // this.dataService.dataforq3.subscribe(res => {
    
      //  this.obj1['Y' + res] = this.Yform.get('info').value;
    //    console.log(this.obj1);
    //    val[this.obj1['Y' + res]];
    //     this.obj[this.xiteration]=this.Yform.get('info').value;
    //     // this.obj['Y' + res] = this.Yform.get('info').value;
    //     this.fin1.push({
    //       xval1:this.xiteration,
    //       xval2:this.Yform.get('info').value
    //     })
    //   }

    // }});
    // writeJsonFile('./../data/jsonfile.json',this.obj);
    console.log(this.obj);
    // console.log(this.obj);
    this.saved.emit(true);
  }
  
}
