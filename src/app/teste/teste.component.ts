import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  teste: string = 'Testando angular';

  constructor() { }

  ngOnInit(): void {
  }

}
