import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variavel',
  templateUrl: './variavel.page.html',
  styleUrls: ['./variavel.page.scss'],
})
export class VariavelPage implements OnInit {

  var1: any;
  var2: any;
  var3: any;
  card: string;

  constructor() { }

  ngOnInit() {
  }

}
