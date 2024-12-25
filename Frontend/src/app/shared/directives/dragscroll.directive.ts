import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appDragScroll]'
})
export class DragScrollDirective {

  private isDragging:boolean = false;

  private drag!:HTMLElement;

  private list!:HTMLElement;

  private items!:NodeListOf<HTMLElement>;

  private xPoint!:number;

  private boxSize:number = 144.4;

  private valueTranslateX!:number;

  constructor() { }

  getValueTranslateX():number {
    if(this.isDragging){
      let match = this.list.style.transform.match(/translateX\(([-\d]+)px\)/);
      return match ? Number(match[1]) : 0;
    }
    return 0;
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.drag = document.querySelector(".drag-scroll")!;
    this.list = document.querySelector(".news-list")!;
    this.items = this.list.querySelectorAll(".news-item");
    this.list.style.pointerEvents = "auto";
    this.isDragging = true;
    this.xPoint = event.clientX;
    this.valueTranslateX = this.getValueTranslateX();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if(this.isDragging && this.items.length > 5){
      const move:number = this.xPoint - event.clientX - this.valueTranslateX;
      this.list.style.transform = `translateX(${-move}px)`;
      if(this.getValueTranslateX() > 0){
        this.list.style.transform = `translateX(${0}px)`;
      }
      const limit:number = -Math.floor((this.boxSize * (this.items.length - 6)))
      if(this.getValueTranslateX() < limit){
        this.list.style.transform = `translateX(${limit}px)`;
      }
    }
  }

  @HostListener('window:mouseup',['$event'])
  onMouseUpWindow(): void {
    if(this.isDragging){
      this.isDragging = false;
      this.drag.style.pointerEvents = "none";
      this.list.style.transition = 'transform 300ms ease';
      this.items.forEach(el => el.style.pointerEvents = "auto")
    }
  }

}
