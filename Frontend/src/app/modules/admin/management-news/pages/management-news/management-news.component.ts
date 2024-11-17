import {Component, OnInit} from '@angular/core';
import {SelectionModel} from "../../../../../data/models/selection.interface";
import {Router} from "@angular/router";
import {NewsModel} from "../../../../../data/models/news.interface";

@Component({
  selector: 'app-management-management-news',
  templateUrl: './management-news.component.html',
  styleUrl: './management-news.component.css'
})
export class ManagementNewsComponent implements OnInit {

  isVisible: boolean = false;

  constructor(private router:Router) {}

  ngOnInit(): void {
  }

  public optionStatus: SelectionModel<string>[] = [
    { value: '', label: "All Status", disable: false},
    { value: '0', label: "Disable Status", disable: false},
    { value: '1', label: "Active Status", disable: false},
  ]

  public optionTopics: SelectionModel<string>[] = [
    { value: '', label: "A Topic", disable: false},
    { value: '0', label: "B Topic", disable: false},
    { value: '1', label: "C Topic", disable: false},
  ]

  public optionSources: SelectionModel<string>[] = [
    { value: '', label: "A Source", disable: false},
    { value: '0', label: "B Source", disable: false},
    { value: '1', label: "C Source", disable: false},
  ]

  public optionOther: SelectionModel<string>[] = [
    { value: '', label: "Newest News", disable: false},
    { value: '0', label: "Oldest News", disable: false},
    { value: '1', label: "View", disable: false},
    { value: '3', label: "View", disable: false},
  ]

  public data: NewsModel[] = [
    {
      id:'1',
      title: "This is a normal word tc1-a tc2-warning tc3-critical tc4-info other, This is a normal word tc1-a tc2-warning tc3-critical tc4-info other. This is a normal word tc1-a tc2-warning tc3-critical tc4-info other",
      image: "https://example.com/images/ai-news.jpg",
      audio: "https://example.com/audio/ai-news.mp3",
      status: true,
      viewed: 1250,
      createdAt: new Date("2024-12-01T08:30:00Z"),
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
      title: "Thời tiết hôm nay: Mưa lớn tại khu vực miền Trung",
      image: "https://example.com/images/weather-news.jpg",
      audio: "https://example.com/audio/weather-news.mp3",
      status: true,
      viewed: 890,
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
      title: "Thể thao: Đội tuyển Việt Nam giành chiến thắng lịch sử",
      image: "https://example.com/images/sports-news.jpg",
      audio: "https://example.com/audio/sports-news.mp3",
      status: false,
      viewed: 1520,
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

  public selectionChange(value:string):void{
    console.log(value);
  }

  navigateToPage(url:string, event: Event):void {
    event.stopPropagation();
    event.preventDefault();
    this.router.navigate([url]).then(r => {});
  }

  handleRemoveNews(event: Event):void {
    event.stopPropagation();
    event.preventDefault();
    this.isVisible = !this.isVisible;
  }
}
