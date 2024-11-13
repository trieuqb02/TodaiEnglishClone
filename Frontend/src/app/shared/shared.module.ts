import {NgModule} from '@angular/core';
import {ButtonComponent} from './components/button/button.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Oauth2ButtonComponent} from './components/oauth2-button/oauth2-button.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {DropdownDirective} from './directives/dropdown.directive';
import {AvatarComponent} from './components/avatar/avatar.component';
import {NgClass} from "@angular/common";
import {WordLevelPipe} from './pipes/word-level.pipe';
import {DragScrollDirective} from "./directives/dragscroll.directive";
import { AudioComponent } from './components/audio/audio.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  imports: [ReactiveFormsModule, NgClass, RouterLink, RouterLinkActive],
  exports: [ReactiveFormsModule, ButtonComponent, Oauth2ButtonComponent, ToolbarComponent, DropdownComponent, DropdownDirective, AvatarComponent, WordLevelPipe, DragScrollDirective, AudioComponent,BreadcrumbComponent],
  declarations: [ButtonComponent, Oauth2ButtonComponent, ToolbarComponent, DropdownComponent, DropdownDirective, AvatarComponent, WordLevelPipe, DragScrollDirective, AudioComponent, BreadcrumbComponent],
})
export class SharedModule {
}
