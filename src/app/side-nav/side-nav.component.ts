import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

selectedMenu:any='Home';

goTo(ParamText:string){
  this.selectedMenu=ParamText
}


}
