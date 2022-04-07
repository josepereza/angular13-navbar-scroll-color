import { Component, OnInit,HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isactive:boolean=false
scrolling:boolean=false
scrollPos=0
barraTransparente:boolean=false;
altura:number=0;
  constructor(@Inject(DOCUMENT) private document: Document) { }
  @HostListener('document:scroll', ['$event']) onScrollEvent($event:any){
    // console.log($event['Window']);
     console.log($event);

     if ((this.document.documentElement.getBoundingClientRect()).top > this.scrollPos)
     {console.log('arriba')
       this.scrolling = false;}
     else 
     {
            this.scrollPos=(this.document.documentElement.getBoundingClientRect()).top
            console.log('abajo')
            this.scrolling=true

     }
    //  if(!this.scrolling) {
    //    this.scrolling = true;
    //  }
    this.altura=this.document.documentElement.scrollHeight
    console.log(this.altura,this.document.documentElement.scrollTop)
    if(this.document.documentElement.scrollTop>(this.altura/2)){
      this.scrollPos=0;
    }
    if (this.document.documentElement.scrollTop==0){
      this.scrollPos=0;
    this.barraTransparente=true;
    
    } else this.barraTransparente=false;
    
  }
  ngOnInit(): void {
  }
mievent(){
 this.isactive=true
}

}
