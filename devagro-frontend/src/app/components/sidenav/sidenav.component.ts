import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  ngOnInit(): void {
  }

  pathHome = "./../../../assets/icone-armazem-cinza-branco.svg"

  pathMilho = "./../../../assets/icone-milho-cinza-branco.svg"

  pathFunc = "./../../../assets/icone-workers-cinza-branco.svg"

  pathArmazem = "./../../../assets/icone-trator-cinza-branco.svg"

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });

  }
}
