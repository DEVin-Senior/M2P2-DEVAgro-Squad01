import { Component, OnInit } from '@angular/core';
import { Grao } from './grao';
import { FormsModule } from '@angular/forms';
import { GRAOS } from './mock-grao';

@Component({
  selector: 'app-graos',
  templateUrl: './graos.component.html',
  styleUrls: ['./graos.component.css']
})
export class GraosComponent implements OnInit {

  graos = GRAOS;

  grao: Grao = {
    id: 1,
    name: 'Windstorm'
  };

  selectedGrao?: Grao;
  onSelect(grao: Grao): void {
    this.selectedGrao = grao;
  }

  
  
  htmlstring: string = '';
  key: string = 'Graos';
  myItem!: string | null;
  storeGrao() {
    localStorage.setItem(this.key, JSON.stringify(this.graos));
    this.myItem = localStorage.getItem(this.key);
    this.graos = JSON.parse(String(localStorage.getItem("Graos")));
  }
  SpecificDelete(grao: Grao) {
    this.graos = this.graos.filter(h => h !== grao);
    localStorage.setItem(this.key, JSON.stringify(this.graos));
  }

  deleteGraos() {
    localStorage.clear();
    this.myItem = '';
    this.graos = JSON.parse(String(localStorage.getItem("Graos")));
  }

  constructor() { 
  }

  ngOnInit(): void {
   
  }

}
