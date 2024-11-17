import {NgModule} from "@angular/core";
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { ListOtherNewsComponent } from './components/list-other-news/list-other-news.component';
import {NewsDetailRoutingModule} from "./news-detail-routing.module";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    NewsDetailComponent,
    ListOtherNewsComponent,
  ],
  imports: [NewsDetailRoutingModule,SharedModule,],
})
export class NewsDetailModule { }
