import { Component, Input, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

export interface Person {
  id:number,
  name:string
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit, OnDestroy {

  

  private _data:Person;
  
  @Output() onremove = new EventEmitter();

  @Input('data') set data(n:Person) {
    this._data = n;
  }

  get data() {
    return this._data;
  }

  constructor() { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOndestroy():void {
    
  }

  ngOnInit() {
    this.data 
  }

  OnRemove() {
    this.onremove.next(this.data.id);
  }

}
