import {Inject, Injectable} from '@angular/core';
import {ParagraphModel} from "../models/paragraph.interface";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { API_DICTIONARY } from '../../app.config';
import {DictionaryModel} from "../models/api-word.interface";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private dictionary: Subject<DictionaryModel> = new Subject<DictionaryModel>();

  constructor(private http:HttpClient, @Inject(API_DICTIONARY) private API_DICTIONARY: string) {
  }

  public closeDictionary(): void {
    this.dictionary.next({
      status: false
    });
  }

  public openDictionary(): void {
    this.dictionary.next({
      status: true
    });
  }

  public putDictionary(dictionary: DictionaryModel): void {
    this.dictionary.next(dictionary);
  }

  public getDictionary(): Observable<DictionaryModel> {
    return this.dictionary;
  }

  public searchDictionary(word: string): Observable<any> {
    return this.http.get<any>(this.API_DICTIONARY + word);
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
