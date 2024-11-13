import { Component } from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  text: string = "This is a normal word tc1-a tc2-warning tc3-critical tc4-info other, This is a normal str-word tc1-a tc2-warning tc3-critical tc4-info other. This is a normal word tc1-a tc2-warning tc3-critical tc4-info other";

  content1:string = "Wegmans Food Markets has recalled its \"Large Asian Sesame Salad with Chicken & Asian Dressing\" due to an undeclared tc1-egg allergen, which poses risks to tc1-people with egg allergies.";
  content2:string = "This tc2-voluntary recall affects Wegmans locations across New York, Pennsylvania, New Jersey, Virginia, Maryland, Massachusetts, North Carolina, tc2-Delaware, and str-Washington, D.C. The tc2-recalled products have UPC codes tc2-beginning with 2-27306, packed between November 5 and November 8, with sell-by dates from November 7 to November 10.";
  content3:string = "Eggs are tc2-among the nine major allergens listed tc2-under the 2021 FASTER Act, which mandates food tc1-allergen labeling. Reactions to str-egg tc4-proteins can tc3-range tc1-from tc2-mild symptoms like skin rash and digestive issues to severe cases such as anaphylaxis, a life-threatening condition that requires immediate treatment with epinephrine.";
  content4:string = "Wegmans has tc1-advised that customers may return the product for a full refund. tc1-For those with known allergies, tc1-reading food str-labels tc4-and tc3-avoiding allergens is tc4-pcritical for tc2-safety."

  constructor(private sanitizer: DomSanitizer) {}

  getSafeHtml(text: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
