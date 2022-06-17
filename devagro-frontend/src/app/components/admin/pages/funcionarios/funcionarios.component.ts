import { Component, Input, OnInit, TRANSLATIONS } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
})
export class FuncionariosComponent implements OnInit {
  @Input() public titulo: string = 'Funcionários';

  nome: string = '';
  id: Number = 0;
  fazenda: string = '';
  CPF: string = '';
  telefone: string = '';
  funcao_principila: string = '';
  ativo: boolean = true;

  constructor() {}

  localStorageView: Array<Object> = Object(
    JSON.parse(String(localStorage.getItem('listaFuncionarios')))
  );
  localStorageViewObject: Array<Object> = [];
  listaObj: Array<object> = [];
  listNome: Array<any> = [];
  listFazenda: Array<any> = [];
  listFuncao: Array<any> = [];
  listAtivo: Array<any> = [];

  ngOnInit(): void {
    if (Object.keys(this.localStorageView).length != 0) {
      this.localStorageViewObject.forEach((element) => {
        console.log(element);
      });
      this.localStorageView.forEach((element) => {
        console.log(JSON.parse(String(element)));
        this.localStorageViewObject.push(JSON.parse(String(element)));
        console.log(this.localStorageViewObject);
        console.log(element);
        //console.log(element.isPrototypeOf)
      });
      this.localStorageViewObject.forEach((elemental) => {
        Object.entries(elemental).forEach((element) => {});
        console.log(Object.entries(elemental));
      });
      console.log(this.localStorageView);
      console.log(this.localStorageView);

      this.localStorageViewObject.forEach((elemental) => {
        Object.entries(elemental).forEach((element) => {});
        console.log(Object.entries(elemental));
      });
      this.addFuncionarios();
      this.pegaFazenda();
      this.pegaFuncao();
      this.pegaAtividade();
      //this.pegaFazenda()
    }
  }

  pegaNome(): any {
    this.localStorageViewObject.forEach((elemental) => {
      Object.entries(elemental).forEach((element) => {
        if (element[0] == 'nome') {
          console.log(element[1]);
          this.nome = element[1];
          console.log(this.nome);
          this.listNome.push(this.nome);
          console.log(this.listNome);
          return element[1].toString;
        }
      });

      console.log(Object.entries(elemental));
    });
  }
  pegaFazenda() {
    this.localStorageViewObject.forEach((elemental) => {
      Object.entries(elemental).forEach((element) => {
        if (element[0] == 'fazenda') {
          console.log(element[1]);
          this.fazenda = element[1];
          console.log(this.fazenda);
          this.listFazenda.push(this.fazenda);
          console.log(this.listFazenda);
          return element[1].toString;
        }
      });

      console.log(Object.entries(elemental));
    });
  }

  pegaFuncao() {
    this.localStorageViewObject.forEach((elemental) => {
      Object.entries(elemental).forEach((element) => {
        if (element[0] == 'funcao_princila') {
          console.log(element[1]);
          this.funcao_principila = element[1];
          console.log(this.funcao_principila);
          this.listFuncao.push(this.funcao_principila);
          console.log(this.listFuncao);
          return element[1].toString;
        }
      });

      console.log(Object.entries(elemental));
    });
  }

  pegaTelefone() {}
  pegaFUncaoPrincipal() {}
  pegaAtividade() {
    this.localStorageViewObject.forEach((elemental) => {
      Object.entries(elemental).forEach((element) => {
        if (element[0] == 'ativo') {
          console.log(element[1]);
          this.ativo = element[1];
          console.log(this.ativo);
          this.listAtivo.push(this.ativo);
          console.log(this.listAtivo);
          return element[1].toString;
        }
      });

      console.log(Object.entries(elemental));
    });
  }

  addFuncionarios() {
    // product.preventDefault();

    //CRIA UM ELEMENTO TR E ATRIBUI UMA CLASSE A ELE
    const tr = document.createElement('tr');
    tr.classList.add('tr');

    ///BUSCA O ELEMENTO TABLE VIA DOM
    //DEFINE O ELEMENTO TR CRAIDO ANTERIORMENTE COMO ELEMENTO FILHO DE TABLE
    const table = document.querySelector('table');
    table?.appendChild(tr);

    ///CRIAÇÃO DOS ELEMENTOS TD E CONFIGURAÇÃO DOS NOMES DAS CLASSES
    const td2 = document.createElement('td');
    td2.classList.add('td2');
    const td1 = document.createElement('td');
    td1.classList.add('td1');

    const td3 = document.createElement('td');
    td3.classList.add('td3');
    const td4 = document.createElement('td');
    td4.classList.add('td4');
    const td5 = document.createElement('td');
    td5.classList.add('td5');

    //////ASSOCIA TODAS AS "TD" COMO FILHAS DE "TR"

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    //MANIPULA ELEMENTOS DENTRO DE "TD1" (INSERE 2 DIVS)
    const divImg = document.createElement('div');
    td1.appendChild(divImg);
    //Adiciona tag <img> dentro de "divImg"
    const img = document.createElement('img');
    divImg.appendChild(img);

    //ADICIONA DIV QUE CONTERÁ NOME E EMAIL
    const divParagrafo = document.createElement('div');
    td1.appendChild(divParagrafo);
    //ADICIONA OS PARAGRAFOS QUE CONTERAM NOME E EMAIL NA "DIVpARAGRAFO"
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    divParagrafo.appendChild(p1);
    this.pegaNome();
    p1.classList.add('id:');
    console.log(p1.className);
    //p1.className=this.nome

    divParagrafo.appendChild(p2);

    // p2.innerText="xxxxxxxxx"

    //MANIPULA ELEMENTOS DENTRO DE "TD2"
  }

  constroiLsitaDeObj() {
    this.localStorageView.forEach((element) => {
      console.log(JSON.parse(String(element)));
      this.localStorageViewObject.push(JSON.parse(String(element)));
      console.log(this.localStorageViewObject);
      console.log(element);
      console.log(element.isPrototypeOf);
    });
  }

  addProduct2() {}
}
