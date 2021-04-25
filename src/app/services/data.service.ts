import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = new BehaviorSubject<any>(null);
  dataforq3 = new BehaviorSubject<any>(null);
  dataforq2 = new BehaviorSubject<any>(null);
  constructor() { }
}
