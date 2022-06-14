import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-graos',
  templateUrl: './graos.component.html',
  styleUrls: ['./graos.component.css']
})
export class GraosComponent implements OnInit {

  title = 'data-table';

  constructor(private service: TableService) { }

  ngOnInit(): void {
   
  }

}
