import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TopicModel} from "../../../../../data/models/topic.interface";

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.css'
})
export class TopicListComponent implements  OnInit{
  allTopic:TopicModel[] = [
    {id:"a", name:"Travel"},
    {id:"b", name:"World"}
  ];

  // @Output("topic") topic:EventEmitter<string> = new EventEmitter<string>;
  // @Input("topic") topicName!:string;

  name:string = "Travel";

  constructor() {
  }

  ngOnInit(): void {
  }

  // selectTopic(name:string){
  //   this.topic.emit(name);
  //   this.name = name;
  // }
}
