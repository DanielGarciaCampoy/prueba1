import { Component } from '@angular/core';
import { Person } from './person/person.component';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name:string="Juan";
  people:Person[]=[];
  id:number=0;
  constructor() {}

  addPerson(name:string) {
    this.people.push({id:this.id++,name:name});
    this.name=""
  }

  removePerson(id:number) {
    this.people = this.people.filter(p=>p.id=id)
    var index = this.people.findIndex(p=>p.id==id);
    if (index>=0) {
      this.people.splice(index, 1);
    }
  }

}
