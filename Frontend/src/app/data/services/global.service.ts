import {Injectable} from '@angular/core';
import {ParagraphModel} from "../models/paragraph.interface";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private dictionary: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }

  public closeDictionary(): void {
    this.dictionary.next(false);
  }

  public openDictionary(): void {
    this.dictionary.next(true);
  }

  public getDictionary(): Observable<boolean> {
    return this.dictionary;
  }

  public handleLevelPercent(paragraphs: ParagraphModel[], type: 'tc-1' | 'tc-2' | 'tc-3' | 'tc-4'): number {
    let totalWords:number = 0;
    let totalType:number = 0;
    paragraphs.forEach(paragraph => {
      const words:string[] = paragraph.content.split(' ');
      words.forEach(word => {
        let prefix = word.slice(0, 4);
        if(prefix.includes('tc-')){
          totalWords += 1;
          if(prefix === type){
            totalType += 1;
          }
        }
      })
    })
    return totalType % totalWords * 100;
  }
}
