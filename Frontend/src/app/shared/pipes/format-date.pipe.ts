import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
  transform(value: Date): string {
    if (!value) return '';
    const year:number = value.getFullYear();
    const month:string = String(value.getMonth() + 1).padStart(2, '0');
    const day:string = String(value.getDate()).padStart(2, '0');
    const hours:string = String(value.getHours()).padStart(2, '0');
    const minutes:string = String(value.getMinutes()).padStart(2, '0');
    const seconds:string = String(value.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
}
