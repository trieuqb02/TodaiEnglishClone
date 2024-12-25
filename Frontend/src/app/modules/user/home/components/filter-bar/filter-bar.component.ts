import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TopicModel} from "../../../../../data/models/topic.interface";
import {SourceModel} from "../../../../../data/models/source.interface";
import {GlobalService} from "../../../../../data/services/global.service";

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent{
  @Input() topicList!: TopicModel[];
  @Input() sourceList!: SourceModel[];
  @Output() topicIdChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() sourceIdChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() searchChange:EventEmitter<string>  = new EventEmitter<string>;

  constructor(private gL:GlobalService) {
  }

  isSearching: boolean = false;

  public changeSearchBar(): void {
    this.isSearching = !this.isSearching;
    this.searchChange.emit('');
  }

  public handleChange(value:string):void{
    this.searchChange.emit(value);
  }

  public handleSelect(type: 'topic' | 'source', $event:Event): void {
    const emitters = {
      topic: this.topicIdChange,
      source: this.sourceIdChange,
    }
    emitters[type].emit(($event.target as HTMLSelectElement).value)
  }

  public handleOpenDictionary():void {
    this.gL.openDictionary()
  }

}
