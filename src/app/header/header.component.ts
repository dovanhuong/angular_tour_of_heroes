import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  slogan: string = "Your one stop shop for everything";
  getSlogan(){
    return 'This is a new slogan for web';
  }

}
