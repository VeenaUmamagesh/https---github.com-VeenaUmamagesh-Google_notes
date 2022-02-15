
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  
})
export class NotesComponent  {

  allnotes:any[]=[];
  currcolor!:string;
  title:any;
  note: any;
  id: any;
  colors: any;
  upimg:any[]=[];
  uploadimage(event:any){
    var reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event:any)=>{
      this.upimg.push(event.target.result);
      console.log(this.upimg);
    }
    //console.log(event);
  }

  add(id:any,title: any,note:any,colors:string,upimg:any){
  this.allnotes.push({id,title,note,colors,upimg});
  this.upimg=[];
  console.log(this.allnotes);
}
changecolor(colors: string){
  document.getElementById("bg")!.style.background =colors;

  this.currcolor=colors;
}

update(noteid:any,notetitle:any,notedes:any,currcolor:string,upimg:any)
{
  if(noteid in this.allnotes)
  {
    this.allnotes[noteid].upimg=upimg;
    this.allnotes[noteid].currcolor=currcolor;
    this.allnotes[noteid].title=notetitle;
    this.allnotes[noteid].note=notedes;
  }
  else
  {
    this.allnotes.push(noteid,notetitle,notedes,currcolor,upimg);
  }

}


step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor(public dialog: MatDialog) { }
  openDialog(id:any,title:any,note:any,currcolor:string,upimg:any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      
      data: {id:id,title:title,note:note,currcolor:currcolor,upimg:upimg}
    });
    dialogRef.afterClosed().subscribe((result) => { 
     const save=result.split(',');
      //this.id=save[0];
     
     //document.getElementById(id)?.remove();
     this.update(save[0],save[1],save[2],save[3],save[4]);
      //console.log(this.id,this.title,this.note);
      this.title="";
      this.note="";
    });
}
  
}
  

