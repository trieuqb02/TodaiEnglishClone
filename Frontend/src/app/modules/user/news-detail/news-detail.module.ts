import {NgModule} from "@angular/core";
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { ListOtherNewsComponent } from './components/list-other-news/list-other-news.component';
import {NewsDetailRoutingModule} from "./news-detail-routing.module";
import {SharedModule} from "../../../shared/shared.module";
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [
    NewsDetailComponent,
    ListOtherNewsComponent,
    NewsComponent
  ],
  imports: [NewsDetailRoutingModule,SharedModule,],
})
export class NewsDetailModule { }
