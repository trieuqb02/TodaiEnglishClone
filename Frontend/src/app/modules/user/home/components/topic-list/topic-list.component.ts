import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TopicModel} from "../../../../../data/models/topic.interface";

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.css'
})
export class TopicListComponent implements  OnInit{
  allTopic:TopicModel[] = [

  ];

  // @Output("management-topic") management-topic:EventEmitter<string> = new EventEmitter<string>;
  // @Input("management-topic") topicName!:string;

  name:string = "Travel";

  constructor() {
  }

  ngOnInit(): void {
  }

  // selectTopic(name:string){
  //   this.management-topic.emit(name);
  //   this.name = name;
  // }
}
