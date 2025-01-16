import {Directive, HostListener} from "@angular/core";
import {DictionaryService} from "../../data/services/dictionary.service";

@Directive({
  selector: '[highlightText]',
})
export class HighlightTextDirective {

  constructor(private dictionaryService:DictionaryService) {
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    const selection = window.getSelection();
    if (selection) {
      const selectedText = selection.toString().trim();
      if(selectedText){
        this.dictionaryService.putDictionary({
          status: true,
          word: selectedText
        })
      }
    }
  }
}
