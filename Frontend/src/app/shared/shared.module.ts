import {NgModule} from '@angular/core';
import {ButtonComponent} from './components/button/button.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Oauth2ButtonComponent} from './components/oauth2-button/oauth2-button.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {DropdownDirective} from './directives/dropdown.directive';
import {AvatarComponent} from './components/avatar/avatar.component';
import {LowerCasePipe, NgClass, UpperCasePipe} from "@angular/common";
import {WordLevelPipe} from './pipes/word-level.pipe';
import {DragScrollDirective} from "./directives/dragscroll.directive";
import {AudioComponent} from './components/audio/audio.component';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {PaginationComponent} from './components/pagination/pagination.component';
import {ModalComponent} from './components/modal/modal.component';
import {SelectionComponent} from './components/selection/selection.component';
import {SearchInputComponent} from './components/search-input/search-input.component';
import {TitleHeaderComponent} from './components/title-header/title-header.component';
import {NewsComponent} from "./components/news/news.component";
import {LoadingComponent} from './components/loading/loading.component';
import {FormatDatePipe} from "./pipes/format-date.pipe";
import {ComingSoonComponent} from './components/coming-soon/coming-soon.component';
import {HighlightTextDirective} from './directives/highlight-text.directive'
import {DictionaryComponent} from "./components/dictionary/dictionary.component";

@NgModule({
  imports: [
    ReactiveFormsModule,
    NgClass,
    RouterLink,
    RouterLinkActive,
    UpperCasePipe,
    LowerCasePipe
  ],
  exports: [
    ReactiveFormsModule,
    ButtonComponent,
    Oauth2ButtonComponent,
    ToolbarComponent,
    DropdownComponent,
    DropdownDirective,
    AvatarComponent,
    WordLevelPipe,
    DragScrollDirective,
    AudioComponent,
    BreadcrumbComponent,
    PaginationComponent,
    SelectionComponent,
    SearchInputComponent,
    ModalComponent,
    TitleHeaderComponent,
    NewsComponent,
    LoadingComponent,
    FormatDatePipe,
    ComingSoonComponent,
    DictionaryComponent
  ],
  declarations: [
    ButtonComponent,
    DictionaryComponent,
    Oauth2ButtonComponent,
    ToolbarComponent,
    DropdownComponent,
    DropdownDirective,
    AvatarComponent,
    WordLevelPipe,
    DragScrollDirective,
    AudioComponent,
    BreadcrumbComponent,
    PaginationComponent,
    ModalComponent,
    SelectionComponent,
    SearchInputComponent,
    TitleHeaderComponent,
    NewsComponent,
    LoadingComponent,
    FormatDatePipe,
    ComingSoonComponent,
    HighlightTextDirective
  ],
})
export class SharedModule {
}
