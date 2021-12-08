import { Directive,ElementRef,HostBinding,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  border: string | undefined;

  constructor(private el:ElementRef,private renderer:Renderer2) { 
    el.nativeElement.style.color="blue";
    el.nativeElement.style.backgroundColor="pink";
    
  }
  ngOnInit(){
    this.renderer.setStyle(this.el.nativeElement,'background-color','khaki');
   }
  // @HostBinding("style.backgroundColor") bgColor; 
  // @HostListener('mouseenter') mouseEnter(){
  //   this.changeColor("green");
  //   this,this.bgColor("black");
  // }
  // changeColor(color: string){
  //   this.el.nativeElement.style.color=color;
  // }
  // @HostListener('mouseover') onMouseOver(){
  //   this.border='5px solid black';
  //   console.log("Mouse over");
    
    
    
  // }

}
