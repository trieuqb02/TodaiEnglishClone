import {Component, OnInit} from '@angular/core';
import {TopicModel} from "../../../../../data/models/topic.interface";
import {SourceModel} from "../../../../../data/models/source.interface";
import {NewsModel} from "../../../../../data/models/news.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public topicId: string = '';
  public sourceId: string = '';
  public search: string = '';

  public default: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  public allTopic:TopicModel[] = [
    {id: "", description: "All", status: true, name: 'name 0',},
    {id: "1", description: "public 1", status: true, name: 'name 1',},
    {id: "3", description: "public 3", status: true, name: 'name 3',},
  ];

  public allSource:SourceModel[] = [
    {id: "", description: "All", status: true, name: 'name 0',},
    {id: "1", description: "public 1", status: true, name: 'name 1',},
    {id: "3", description: "public 3", status: true, name: 'name 3',},
  ];

  public selectedTopic(data:string):void {
    this.topicId = data;
    this.checkDefault();
  }

  public selectedSource(data:string):void {
    this.sourceId = data;
    this.checkDefault();
  }

  public checkDefault():void {
    this.default = this.topicId == '' && this.sourceId == '';
  }

  public searchChange(data:string):void {
    this.default = !data;
    this.search = data.trim();
    this.topicId = '';
    this.sourceId = '';
  }
}
