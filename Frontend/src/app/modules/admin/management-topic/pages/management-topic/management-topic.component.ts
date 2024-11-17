import {Component, OnInit} from '@angular/core';
import {SelectionModel} from "../../../../../data/models/selection.interface";
import {SourceModel} from "../../../../../data/models/source.interface";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {from} from "rxjs";
import {filter} from "rxjs/operators";
import {TopicModel} from "../../../../../data/models/topic.interface";

@Component({
  selector: 'app-management-topic',
  templateUrl: './management-topic.component.html',
  styleUrl: './management-topic.component.css'
})
export class ManagementTopicComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.data = this.list
  }

  public submitted: Boolean = false;
  public showForm: boolean = false;
  public showNotification: boolean = false;
  private statusType: string = '';

  public data: TopicModel[] = []

  public list: TopicModel[] = [
    {id: "1", description: "public 1", status: true, name: 'name 1', quantity: 135},
    {id: "2", description: "public 2", status: false, name: 'name 2', quantity: 135},
    {id: "3", description: "public 3", status: true, name: 'name 3', quantity: 135},
  ]

  public optionsStatus: SelectionModel<string>[] = [
    {value: "", label: "Choose status", disable: true},
    {value: "0", label: "Disable", disable: false},
    {value: "1", label: "Active", disable: false},
  ]

  public selection: SelectionModel<string>[] = [
    {value: "", label: "All Status", disable: false},
    {value: "0", label: "Disable Status", disable: false},
    {value: "1", label: "Active Status", disable: false},
  ]

  public formTopic = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    description: new FormControl<string>(''),
    status: new FormControl<string>('', Validators.required),
  })

  public get f(): { [key: string]: AbstractControl } {
    return this.formTopic.controls;
  }

  public cancelError() {
    if (this.submitted) {
      this.submitted = false;
    }
  }

  onValueChange(value: string): void {
    const keyword = value.toLowerCase();
    if (keyword == '') {
      this.selectionChange(this.statusType);
      return;
    }
    this.data = [];
    from(this.list)
      .pipe(
        filter((item: TopicModel) => {
          if (this.statusType == '') {
            return (item.name.toLowerCase().includes(keyword) ||
              item.description!.toLowerCase().includes(keyword))
          } else {
            return  (item.name.toLowerCase().includes(keyword) ||
              item.description!.toLowerCase().includes(keyword)) && item.status == (this.statusType == '1')
          }
          }
        ),
      )
      .subscribe({
        next: (item: SourceModel): void => {
          this.data.push(item);
        },
        error: (error): void => console.log(error),
      });
  }

  selectionChange(value: string): void {
    this.data = [];
    this.statusType = value
    if (value == '') {
      this.data = [...this.list];
      return;
    }
    from(this.list).pipe(
      filter((item: TopicModel) => item.status == (value == '1')),
    ).subscribe(
      {
        next: (item: TopicModel): void => {
          this.data.push(item);
        },
        error: (error): void => console.log(error)
      }
    )
  }

  public openCreatedForm(): void {
    this.showForm = !this.showForm;
    this.formTopic.setValue({
      name: '',
      status: '',
      description: '',
    });
  }

  public handleCreate(): void {
    this.submitted = true;
    if (this.formTopic.valid) {
      this.showForm = !this.showForm;
    }
  }

  public handleUpdate(value: TopicModel): void {
    this.showForm = true;
    this.formTopic.setValue({
      name: value.name,
      description: value.description!,
      status: value.status ? '1' : '0',
    })
  }

  public handleRemove(): void {
    this.showForm = false;
    this.showNotification = !this.showNotification;
  }
}
