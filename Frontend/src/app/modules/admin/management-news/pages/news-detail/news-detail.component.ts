import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsModel} from "../../../../../data/models/news.interface";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css'
})
export class NewsDetailComponent implements OnInit {

  constructor(private router:ActivatedRoute) {}

  ngOnInit(): void {
    const id: string = this.router.snapshot.params['id'];
  }

  public data:NewsModel = {
    id: '3',
    title: "This is a normal word tc1-a tc2-warning tc3-critical tc4-info other, This is a normal str-word tc1-a tc2-warning tc3-critical tc4-info other. This is a normal word tc1-a tc2-warning tc3-critical tc4-info other",
    image: "https://admin.todaienglish.com/images/news/0ce25f6d5b29274ab31050c70f9d446b.jpg",
    audio: "https://example.com/audio/sports-news.mp3",
    status: false,
    viewed: 1520,
    createdAt: new Date("2024-12-01T08:30:00Z"),
    topic: {
      id: '2',
      name: "SportsZone",
    },
    source: {
      id: '3',
      name: "SportsZone",
    },
    paragraphs: [
      {
        id: '1',
        content: "Wegmans Food Markets has recalled its \"Large Asian Sesame Salad with Chicken & Asian Dressing\" due to an undeclared tc1-egg allergen, which poses risks to tc1-people with egg allergies.",
        isNew: true,
        isDelete: false
      },
      {
        id: '2',
        content: "This tc2-voluntary recall affects Wegmans locations across New York, Pennsylvania, New Jersey, Virginia, Maryland, Massachusetts, North Carolina, tc2-Delaware, and str-Washington, D.C. The tc2-recalled products have UPC codes tc2-beginning with 2-27306, packed between November 5 and November 8, with sell-by dates from November 7 to November 10.",
        isNew: true,
        isDelete: false
      },
      {
        id: '3',
        content: "Eggs are tc2-among the nine major allergens listed tc2-under the 2021 FASTER Act, which mandates food tc1-allergen labeling. Reactions to str-egg tc4-proteins can tc3-range tc1-from tc2-mild symptoms like skin rash and digestive issues to severe cases such as anaphylaxis, a life-threatening condition that requires immediate treatment with epinephrine.",
        isNew: true,
        isDelete: false
      },
    ],
  }
}
