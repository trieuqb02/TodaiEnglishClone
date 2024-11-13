import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-recent-news',
  templateUrl: './recent-news.component.html',
  styleUrl: './recent-news.component.css'
})
export class RecentNewsComponent {

  text: string = "This is a normal word tc1-a tc2-warning tc3-critical tc4-info other, This is a normal word tc1-a tc2-warning tc3-critical tc4-info other. This is a normal word tc1-a tc2-warning tc3-critical tc4-info other";

  content: string = "This is a normal word tc1-a tc2-warning tc3-critical tc4-info other, This is a normal word tc1-a tc2-warning tc3-critical tc4-info other. This is a normal word tc1-a tc2-warning tc3-critical tc4-info other This is a normal word tc1-a tc2-warning tc3-critical tc4-info other, This is a normal word tc1-a tc2-warning tc3-critical tc4-info other. This is a normal word tc1-a tc2-warning tc3-critical tc4-info other";

  constructor(private sanitizer: DomSanitizer) {}

  getSafeHtml(text: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }

}
