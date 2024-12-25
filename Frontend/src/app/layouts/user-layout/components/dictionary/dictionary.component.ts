import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GlobalService} from "../../../../data/services/global.service";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.css'
})
export class DictionaryComponent implements OnInit {
  @ViewChild('dictionary', {static: true}) dictionary!: ElementRef;

  constructor(private gL:GlobalService) {
  }

  ngOnInit(): void {
    this.gL.getDictionary().subscribe({
      next: (data: boolean) => {
        if(data){
          this.dictionary.nativeElement.style.display = 'block';
        } else{
          this.dictionary.nativeElement.style.display = 'none';
        }
      }
    })
  }

  public handleCloseDictionary():void {
    this.gL.closeDictionary();
  }
}
