import {NgModule} from "@angular/core";
import {HomeComponent} from './pages/home/home.component';
import {TopicListComponent} from './components/topic-list/topic-list.component';
import {HomeRoutingModule} from "./home-routing.module";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {RecentNewsComponent} from './components/recent-news/recent-news.component';
import {NewNewsComponent} from './components/new-news/new-news.component';
import {SharedModule} from "../../../shared/shared.module";
import {FilterBarComponent} from './components/filter-bar/filter-bar.component';
import {DragScrollComponent} from './components/drag-scroll/drag-scroll.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    NgClass,
    NgOptimizedImage,
  ],
  declarations: [
    HomeComponent,
    TopicListComponent,
    RecentNewsComponent,
    NewNewsComponent,
    FilterBarComponent,
    DragScrollComponent
  ],
})
export class HomeModule {
}
