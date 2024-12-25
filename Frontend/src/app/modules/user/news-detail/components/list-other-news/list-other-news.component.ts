import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {NewsModel} from "../../../../../data/models/news.interface";

@Component({
  selector: 'app-list-other-news',
  templateUrl: './list-other-news.component.html',
  styleUrl: './list-other-news.component.css'
})
export class ListOtherNewsComponent implements OnInit {
  @Input() topicId!:string;

  constructor() {}

  public data: NewsModel[] = [
    {
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
        { id: '1', content: "Trí tuệ nhân tạo đang cách mạng hóa ngành báo chí." },
        { id: '2', content: "Các công cụ AI giúp tạo nội dung nhanh hơn và chính xác hơn." },
        { id: '3', content: "Tuy nhiên, vẫn còn những thách thức về đạo đức và độ tin cậy." },
      ],
    },
    {
      id:'2',
      title: "This is a normal word tc1-a tc2-warning tc3-critical tc4-info other, This is a normal str-word tc1-a tc2-warning tc3-critical tc4-info other. This is a normal word tc1-a tc2-warning tc3-critical tc4-info other",
      image: "https://admin.todaienglish.com/images/news/07db0048b9c6274a66c417cfd0aeb7cf.webp",
      audio: "https://example.com/audio/weather-news.mp3",
      status: true,
      viewed: 890,
      tc_1: '30%',
      tc_2: '30%',
      tc_3: '30%',
      tc_4: '10%',
      createdAt: new Date("2024-12-01T08:30:00Z"),
      source: {
        id: '2',
        name: "WeatherToday",
      },
      paragraphs: [
        { id: '1', content: "Dự báo hôm nay có mưa lớn tại các tỉnh miền Trung." },
        { id: '2', content: "Người dân cần đề phòng ngập lụt và lở đất." },
        { id: '3', content: "Các tỉnh chịu ảnh hưởng nặng nhất gồm: Huế, Quảng Nam, và Đà Nẵng." },
      ],
    },
    {
      id:'3',
      title: "This is a normal word tc1-a tc2-warning tc3-critical tc4-info other, This is a normal str-word tc1-a tc2-warning tc3-critical tc4-info other. This is a normal word tc1-a tc2-warning tc3-critical tc4-info other",
      image: "https://admin.todaienglish.com/images/news/07db0048b9c6274a66c417cfd0aeb7cf.webp",
      audio: "https://example.com/audio/sports-news.mp3",
      status: false,
      viewed: 1520,
      tc_1: '30%',
      tc_2: '30%',
      tc_3: '30%',
      tc_4: '10%',
      createdAt: new Date("2024-12-01T08:30:00Z"),
      source: {
        id: '3',
        name: "SportsZone",
      },
      paragraphs: [
        { id: '1', content: "Đội tuyển Việt Nam vừa giành chiến thắng 2-1 trước Thái Lan." },
        { id: '2', content: "Trận đấu diễn ra kịch tính và thu hút hàng triệu người xem." },
        { id: '3', content: "Chiến thắng này đánh dấu một cột mốc quan trọng trong lịch sử bóng đá Việt Nam." },
      ],
    },
  ];

  ngOnInit(): void {
  }

}
