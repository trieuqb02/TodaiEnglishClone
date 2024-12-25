import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  signal,
  ViewChildren,
  WritableSignal
} from '@angular/core';
import {SelectionModel} from "../../../../../data/models/selection.interface";
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {NewsModel} from "../../../../../data/models/news.interface";
import {ParagraphModel} from "../../../../../data/models/paragraph.interface";

@Component({
  selector: 'app-form-news',
  templateUrl: './form-news.component.html',
  styleUrl: './form-news.component.css'
})
export class FormNewsComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  @ViewChildren('files') files!: QueryList<ElementRef<HTMLInputElement>>;

  public imageFile: WritableSignal<string> = signal('');
  public audioFile: WritableSignal<string> = signal('');

  private  updatedContent!: string;
  private formType: string = 'add';
  public submitted: boolean = false;
  public title!: string;
  public newsForm!: FormGroup;

  ngOnInit(): void {
    const urlSegments = this.router.snapshot.url.map(segment => segment.path);
    this.router.data.subscribe(data => {
      this.title = data['breadcrumb'];
    })
    this.initForm(null);
    if (urlSegments.includes('update')) {
      // const id: string = this.router.snapshot.params['id'];
      this.formType = 'update';
      this.initForm(this.data);
    }
  }

  private data:NewsModel = {
    id: '3',
    title: "Thể thao: Đội tuyển Việt Nam giành chiến thắng lịch sử",
    image: "https://example.com/images/sports-news.jpg",
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
        content: "Đội tuyển Việt Nam vừa giành chiến thắng 2-1 trước Thái Lan.",
        isNew: true,
        isDelete: false
      },
      {
        id: '2',
        content: "Trận đấu diễn ra kịch tính và thu hút hàng triệu người xem.",
        isNew: true,
        isDelete: false
      },
      {
        id: '3',
        content: "Chiến thắng này đánh dấu một cột mốc quan trọng trong lịch sử bóng đá Việt Nam.",
        isNew: true,
        isDelete: false
      },
    ],
  }

  private initForm(data: NewsModel | null) {
    this.newsForm = new FormGroup({
      title: new FormControl<string>(data ? data.title : '', Validators.required),
      topic: new FormControl<string>(data ? data.topic!.id : '', Validators.required),
      source: new FormControl<string>(data ? data.source.id : '', Validators.required),
      status: new FormControl<string>(data ? data.status ? '1' : '0' : '', Validators.required),
      image: new FormControl<string>(data ? data.image : '', Validators.required),
      audio: new FormControl<string>(data ? data.audio : '', Validators.required),
      createdAt: new FormControl<Date | null>(null, Validators.required),
      paragraphs: new FormArray<FormGroup>(data ? this.initParagraphs(data.paragraphs!) : [], Validators.required),
    });
  }

  private initParagraphs(paragraphs: ParagraphModel[]): FormGroup[] {
    const formGroups: FormGroup[] = [];
    paragraphs.forEach(paragraph => {
      const paragraphGroup = new FormGroup({
        id: new FormControl(paragraph.id),
        content: new FormControl(paragraph.content, Validators.required),
        isNew: new FormControl(paragraph.isNew),
        isDeleted: new FormControl(paragraph.isDelete)
      });
      formGroups.push(paragraphGroup);
    });
    return formGroups;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.newsForm.controls;
  }

  get paragraphs(): FormArray {
    return this.f['paragraphs'] as FormArray;
  }

  public cancelError() {
    if (this.submitted) {
      this.submitted = false;
    }
  }

  public optionStatus: SelectionModel<string>[] = [
    {value: '', label: "Choose Status", disable: true},
    {value: '0', label: "Disable Status", disable: false},
    {value: '1', label: "Active Status", disable: false},
  ]

  public optionTopics: SelectionModel<string>[] = [
    {value: '', label: "Choose Topic", disable: true},
    {value: '0', label: "B Topic", disable: false},
    {value: '1', label: "C Topic", disable: false},
  ]

  public optionSources: SelectionModel<string>[] = [
    {value: '', label: "Choose Source", disable: true},
    {value: '0', label: "B Source", disable: false},
    {value: '1', label: "C Source", disable: false},
  ]

  public onSelectFile(fileType: 'image' | 'audio'): void {
    const inputs: ElementRef<HTMLInputElement>[] = this.files.toArray();
    if (fileType == 'image') {
      const imageInput: ElementRef<HTMLInputElement> = inputs.find(input => input.nativeElement.accept === '')!;
      imageInput?.nativeElement.click();
    } else {
      const audioInput: ElementRef<HTMLInputElement> = inputs.find(input => input.nativeElement.accept === 'audio/*')!;
      audioInput?.nativeElement.click();
    }
  }

  handleChooseFile(fileType: 'image' | 'audio', event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      if (fileType == 'image') {
        const file: File = input.files[0];
        this.f['image'].setValue(file.name);
        this.imageFile.set(URL.createObjectURL(file))
      } else if (fileType == 'audio') {
        const file: File = input.files[0];
        this.f['audio'].setValue(file.name);
        this.audioFile.set(URL.createObjectURL(file))
      }
    }
  }

  public handleAddParagraph(): void {
    const paragraph = new FormGroup({
      id: new FormControl(),
      content: new FormControl('', Validators.required),
      isNew: new FormControl(true),
      isDeleted: new FormControl(false),
    })
    this.paragraphs.push(paragraph);
  }

  public handleRemoveParagraph(idx: number): void {
    if (this.formType == 'update') {
      const paragraphGroup = this.paragraphs.at(idx) as FormGroup;
      paragraphGroup.get('isDeleted')?.setValue(true);
    } else {
      this.paragraphs.removeAt(idx);
    }
  }

  public handleSubmit(): void {
    this.submitted = true;
    console.log(this.newsForm.value)
  }

  public handleFocus(event: Event): void {
    if(this.formType == 'update') {
      this.updatedContent = (event.target as HTMLTextAreaElement).value;
    }
  }

  public handleBlur(idx: number): void {
    if(this.formType == 'update') {
      const paragraphGroup = this.paragraphs.at(idx) as FormGroup;
      if(this.updatedContent !== paragraphGroup.get('content')?.value){
        paragraphGroup.get('isNew')?.setValue(false);
      }
    }
  }
}
