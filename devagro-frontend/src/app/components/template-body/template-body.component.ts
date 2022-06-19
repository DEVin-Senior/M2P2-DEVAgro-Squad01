import { AuthService } from './../../core/services/auth.service';
import { Component, Input, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-body',
  templateUrl: './template-body.component.html',
  styleUrls: ['./template-body.component.css'],
})
export class TemplateBodyComponent implements OnInit {

  user :Array<Object>= [];

  private _title: any;

  @Input() get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
    this.elementRef.nativeElement.title = '';
  }

  constructor(
    private elementRef: ElementRef,
    private authService: AuthService
  ) {}

  public logout() {
    this.authService.logout()
  }

  ngOnInit(): void {
  }
}
