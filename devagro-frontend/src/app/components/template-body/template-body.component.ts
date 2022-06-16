import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template-body',
  templateUrl: './template-body.component.html',
  styleUrls: ['./template-body.component.css'],
})
export class TemplateBodyComponent {

  private _title: any;

  @Input() get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
    this.elementRef.nativeElement.title = "";
  }

  constructor(private elementRef: ElementRef) {}


}
