import { Component, OnInit } from '@angular/core';
import { Object } from './grao';
import { GRAOS } from './mock-grao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graos',
  templateUrl: './graos.component.html',
  styleUrls: ['./graos.component.css']
})
export class GraosComponent implements OnInit {

  graos = GRAOS;

  /* grao: Grao = {
    id: 1,
    nome: 'Windstorm', 
    fazenda: 'Serrinha',
    colheita: '05/02/23'
  }; */

  selectedGrao?: Object;
  onSelect(grao: Object): void {
    this.selectedGrao = grao;
  }

  htmlstring: string = '';
  key: string = 'listaGraos';
  myItem!: any | null;
  storeGrao() {
    localStorage.setItem(this.key, JSON.stringify(this.graos));
    /* this.myItem = localStorage.getItem(this.key); */
    this.graos = JSON.parse(String(localStorage.getItem("listaGraos")));
  }
  SpecificDelete(grao: Object) {
    this.graos = this.graos.filter(h => h !== grao);
    localStorage.setItem(this.key, JSON.stringify(this.graos));
  }

  deleteGraos() {
    localStorage.clear();
    this.myItem = '';
    this.graos = JSON.parse(String(localStorage.getItem("listaGraos")));
  }

  constructor(private router: Router) {
    this.graos = JSON.parse(String(localStorage.getItem("listaGraos")));
  }

  btnClick = () => {
    this.router.navigateByUrl('/admin/grao-cadastro');
  };

  ngOnInit(): void {
   
  }

}
