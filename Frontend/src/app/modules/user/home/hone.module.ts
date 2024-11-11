import {NgModule} from "@angular/core";
import { HomeComponent } from './pages/home/home.component';
import { TopicListComponent } from './component/topic-list/topic-list.component';
import {HomeRoutingModule} from "./home-routing.module";
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import { RecentNewsComponent } from './component/recent-news/recent-news.component';
import { NewNewsComponent } from './component/new-news/new-news.component';
import {SharedModule} from "../../../shared/shared.module";
import { FilterBarComponent } from './component/filter-bar/filter-bar.component';
import { DragScrollComponent } from './component/drag-scroll/drag-scroll.component';

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
export class HomeModule {}
