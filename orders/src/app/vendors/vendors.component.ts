import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  @Input() title: string = 'Mon titre statique';

  vendors: string[] = ['Vendeur 1', 'Petit marché', 'Chez Loulou'];

  constructor() { }

  ngOnInit() {
  }

}
