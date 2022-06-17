import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fazendas',
  templateUrl: './fazendas.component.html',
  styleUrls: ['./fazendas.component.css']
})
export class FazendasComponent implements OnInit {

  constructor() { }
  
  @Input() public titulo: string = "Fazendas"

  

  ngOnInit(): void {

    

  }

}




