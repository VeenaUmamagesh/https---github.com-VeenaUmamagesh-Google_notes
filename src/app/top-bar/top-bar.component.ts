import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  selectedMenu:any='Notes';

  goTo(ParamText:string){
    this.selectedMenu=ParamText
  }
  constructor() { }

  ngOnInit(): void {
  }

}
