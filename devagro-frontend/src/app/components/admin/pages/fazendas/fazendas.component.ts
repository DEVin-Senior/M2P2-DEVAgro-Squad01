import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fazendas',
  templateUrl: './fazendas.component.html',
  styleUrls: ['./fazendas.component.css']
})
export class FazendasComponent implements OnInit {

  @Input() public titulo: string = "Fazendas"

  ngOnInit(): void {
  }

}
