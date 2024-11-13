import { Component } from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-list-other-news',
  templateUrl: './list-other-news.component.html',
  styleUrl: './list-other-news.component.css'
})
export class ListOtherNewsComponent {
  text: string = "This is a normal word tc1-a tc2-warning tc3-critical tc4-info other, This is a normal word tc1-a tc2-warning tc3-critical tc4-info other. This is a normal word tc1-a tc2-warning tc3-critical tc4-info other";

  constructor(private sanitizer: DomSanitizer) {}

  getSafeHtml(text: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
