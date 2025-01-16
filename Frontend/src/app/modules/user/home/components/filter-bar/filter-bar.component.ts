import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TopicModel} from "../../../../../data/models/topic.interface";
import {SourceModel} from "../../../../../data/models/source.interface";
import {DictionaryService} from "../../../../../data/services/dictionary.service";

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterBarComponent {
  @Input() topicId!: string;
  @Input() topicList!: TopicModel[];
  @Input() sourceList!: SourceModel[];
  @Output() topicIdChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() sourceIdChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>;

  constructor(private dictionaryService: DictionaryService) {
  }

  isSearching: boolean = false;

  public changeSearchBar(): void {
    this.isSearching = !this.isSearching;
    this.searchChange.emit('');
  }

  public handleChange(value: string): void {
    this.searchChange.emit(value);
  }

  public handleSelect(type: 'topic' | 'source', $event: Event): void {
    const emitters = {
      topic: this.topicIdChange,
      source: this.sourceIdChange,
    }
    emitters[type].emit(($event.target as HTMLSelectElement).value)
  }

  public handleOpenDictionary(): void {
    this.dictionaryService.openDictionary()
  }

}
