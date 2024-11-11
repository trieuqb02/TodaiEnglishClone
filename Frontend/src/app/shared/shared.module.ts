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

@NgModule({
  imports: [ReactiveFormsModule, NgClass],
  exports: [ReactiveFormsModule, ButtonComponent, Oauth2ButtonComponent, ToolbarComponent, DropdownComponent, DropdownDirective, AvatarComponent, WordLevelPipe, DragScrollDirective],
  declarations: [ButtonComponent, Oauth2ButtonComponent, ToolbarComponent, DropdownComponent, DropdownDirective, AvatarComponent, WordLevelPipe, DragScrollDirective],
})
export class SharedModule {
}
