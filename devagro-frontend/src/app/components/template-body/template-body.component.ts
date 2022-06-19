import { AuthService } from './../../core/services/auth.service';
import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-template-body',
  templateUrl: './template-body.component.html',
  styleUrls: ['./template-body.component.css'],
})
export class TemplateBodyComponent implements OnInit {
  user: string = "";

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
    this.authService.logout();
  }

  getDecodedAccessToken(): any {
    const helper = new JwtHelperService();

    const token = JSON.parse(
      String(localStorage.getItem('access_token_devagro'))
    );
    const decodedToken = helper.decodeToken(token);
    this.user = decodedToken.data.nome
  }

  ngOnInit(): void {
    this.getDecodedAccessToken();
  }
}
