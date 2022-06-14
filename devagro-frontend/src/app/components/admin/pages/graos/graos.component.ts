import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graos',
  templateUrl: './graos.component.html',
  styleUrls: ['./graos.component.css']
})
export class GraosComponent implements OnInit {

  key: string = 'Name';
  myItem!: string | null;
  storeName() {
    localStorage.setItem(this.key, 'Angular');
    this.myItem = localStorage.getItem(this.key);
  }
  SpecificDelete() {
    localStorage.removeItem('Name');
  }

  deleteName() {
    localStorage.clear();
  }

  constructor() { 
    
  }

  ngOnInit(): void {
   
  }

}
