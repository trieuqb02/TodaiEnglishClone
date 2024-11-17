import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordLevel'
})
export class WordLevelPipe implements PipeTransform {

  transform(value: string): string {
    const words = value.split(' ');
    const transformedWords = words.map(word => {
      let levelClass = '';
      let prefix = word.slice(0, 4);
      let displayWord = word.slice(4, word.length);
      switch (prefix) {
        case 'tc1-':
          levelClass = 'word-level-1';
          break;
        case 'tc2-':
          levelClass = 'word-level-2';
          break;
        case 'tc3-':
          levelClass = 'word-level-3';
          break;
        case 'tc4-':
          levelClass = 'word-level-4';
          break;
        case 'str-':
          levelClass = 'word-strong';
          break;
        default:
          return `<span>${word}</span>`;
      }
      return `<span class="${levelClass}">${displayWord}</span>`;
    });

    return transformedWords.join(' ');
  }

}
