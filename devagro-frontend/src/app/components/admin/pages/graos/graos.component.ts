import { Component, Input, OnInit } from '@angular/core';
import { Object } from './grao';
import { GRAOS } from './mock-grao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graos',
  templateUrl: './graos.component.html',
  styleUrls: ['./graos.component.css']
})
export class GraosComponent implements OnInit {

  @Input() public titulo: string = "Grãos"

  graos = GRAOS;
  graosObjetos :Array<Object>= [];

  selectedGrao?: Object;
  onSelect(grao: Object): void {
    this.selectedGrao = grao;
  }

  key: any = 'listaGraos';
  myItem!: any | null;
  storeGrao() {
    localStorage.setItem(this.key, JSON.stringify(this.graosObjetos));
    this.graosObjetos = JSON.parse(String(localStorage.getItem("listaGraos")));
  }
  SpecificDelete(grao: Object) {
    this.graos = this.graosObjetos.filter(h => h !== grao);
    localStorage.setItem(this.key, JSON.stringify(this.graos));
    this.graosObjetos = JSON.parse(String(localStorage.getItem("listaGraos")));
    /*this.graosObjetos = JSON.parse(String(localStorage.getItem("listaGraos")));
    this.refreshPage(); */
  }

  deleteGraos() {
    localStorage.clear();
    this.graosObjetos = JSON.parse(String(localStorage.getItem("listaGraos")));
  }

  refreshPage() {
    window.location.reload();
  }
   

  constructor(private router: Router) {
    this.graos = JSON.parse(String(localStorage.getItem("listaGraos")));
    localStorage.setItem(this.key, JSON.stringify(this.graos));
    if(this.graos != null){
      for(let i = 0; i < this.graos.length; i++){
        if(typeof (this.graos[i]) === 'string'){
          this.graosObjetos.push(JSON.parse(String(this.graos[i])))
        }else{
          this.graosObjetos.push(this.graos[i]);
        }
      }
    }
  }

  btnClick = () => {
    this.router.navigateByUrl('/admin/grao-cadastro');
  };

  ngOnInit(): void {

  }

}
