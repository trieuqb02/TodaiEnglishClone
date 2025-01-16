import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TopicModel} from "../../../../../data/models/topic.interface";

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicListComponent implements OnInit {
  @Input() data!: TopicModel[];
  @Input() topicId!: string;
  @Output() topicIdChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectTopic(data: string): void {
    this.topicIdChange.emit(data)
  }
}
