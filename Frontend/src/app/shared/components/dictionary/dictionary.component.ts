import {Component, ElementRef, OnInit, signal, ViewChild, WritableSignal} from '@angular/core';
import {DictionaryService} from "../../../data/services/dictionary.service";
import {ApiWordModel, DictionaryModel} from "../../../data/models/api-word.interface";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.css',
})
export class DictionaryComponent implements OnInit {
  @ViewChild('dictionary', {static: true}) dictionary!: ElementRef;

  public word: WritableSignal<ApiWordModel | undefined> = signal<ApiWordModel | undefined>(undefined);
  public search: WritableSignal<string | null> = signal<string | null>('');
  public notfound!: string;

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.dictionaryService.getDictionary().subscribe({
      next: (data: DictionaryModel) => {
        if (data.status) {
          this.dictionary.nativeElement.style.display = 'block';
          if (data.word) {
            this.search.set(data.word);
            this.handleCallApi(data.word);
          }
        } else {
          this.dictionary.nativeElement.style.display = 'none';
        }
      }
    })
  }

  public handleEnter(event: KeyboardEvent): void {
    if (event.code == 'Enter') {
      const value: string = (event.target as HTMLInputElement).value;
      this.search.set(value)
      this.handleCallApi(value);
    }
  }

  public handleCloseDictionary(): void {
    this.dictionaryService.closeDictionary();
    this.word.set(undefined);
    this.search.set(null);
  }

  public handleCallApi(word: string): void {
    this.dictionaryService.searchDictionary(word).subscribe({
      next: (data: ApiWordModel[]): void => {
        this.word.set(data[0]);
      },
      error: (): void => {
        this.notfound = "the word " + this.search() + " is not found!";
        if(this.word()){
          this.word.set(undefined)
        }
      }
    })
  }
}
