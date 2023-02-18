import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = [
    {id:1, name:'Miminallist analog watch', price:'109', color: 'black', available: 'available', image: '/assets/products/1.jpg'},
    {id:2, name:'Miminallist analog watch', price:'109', color: 'black', available: 'available', image: '/assets/products/1.jpg'},
    {id:3, name:'Miminallist analog watch', price:'109', color: 'black', available: 'available', image: '/assets/products/1.jpg'},
    {id:4, name:'Miminallist analog watch', price:'109', color: 'black', available: 'available', image: '/assets/products/1.jpg'},
    {id:5, name:'Miminallist analog watch', price:'109', color: 'black', available: 'available', image: '/assets/products/1.jpg'},
    {id:6, name:'Miminallist analog watch', price:'109', color: 'black', available: 'available', image: '/assets/products/1.jpg'},

  ];

}
