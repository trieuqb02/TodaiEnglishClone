import {Component, OnInit} from '@angular/core';
import {NewsModel} from "../../../../../data/models/news.interface";
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-management-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css'
})
export class NewsDetailComponent implements OnInit{
  public data:NewsModel = {
    id:'1',
    title: "This is a normal word tc1-a tc2-warning tc3-critical tc4-info other, This is a normal word tc1-a tc2-warning tc3-critical tc4-info other. This is a normal word tc1-a tc2-warning tc3-critical tc4-info other",
    image: "https://admin.todaienglish.com/images/news/07db0048b9c6274a66c417cfd0aeb7cf.webp",
    audio: "https://example.com/audio/ai-news.mp3",
    status: true,
    viewed: 1250,
    createdAt: new Date("2024-12-01T08:30:00Z"),
    tc_1: '30%',
    tc_2: '30%',
    tc_3: '30%',
    tc_4: '10%',
    source: {
      id: '1',
      name: "TechNews",
    },
    paragraphs: [
      { id: '1', content: "Wegmans Food Markets has recalled its \"Large Asian Sesame Salad with Chicken & Asian Dressing\" due to an undeclared tc1-egg allergen, which poses risks to tc1-people with egg allergies." },
      { id: '2', content: "This tc2-voluntary recall affects Wegmans locations across New York, Pennsylvania, New Jersey, Virginia, Maryland, Massachusetts, North Carolina, tc2-Delaware, and str-Washington, D.C. The tc2-recalled products have UPC codes tc2-beginning with 2-27306, packed between November 5 and November 8, with sell-by dates from November 7 to November 10." },
      { id: '3', content: "Eggs are tc2-among the nine major allergens listed tc2-under the 2021 FASTER Act, which mandates food tc1-allergen labeling. Reactions to str-egg tc4-proteins can tc3-range tc1-from tc2-mild symptoms like skin rash and digestive issues to severe cases such as anaphylaxis, a life-threatening condition that requires immediate treatment with epinephrine." },
    ],
  }

  constructor(private route:ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const updatedNewsId = params.get('id');
    });
  }

  public goBack():void {
    this.router.navigate(['/home']);
  }
}
