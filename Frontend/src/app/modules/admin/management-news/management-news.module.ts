import {NgModule} from "@angular/core";
import {ManagementNewsRoutingModule} from "./management-news-routing.module";
import {ManagementNewsComponent} from './pages/management-news/management-news.component';
import {SharedModule} from "../../../shared/shared.module";
import {FormNewsComponent} from "./pages/form-news/form-news.component";
import {NewsDetailComponent} from "./pages/news-detail/news-detail.component";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
    imports: [ManagementNewsRoutingModule, SharedModule, NgOptimizedImage],
  declarations: [
    ManagementNewsComponent,
    FormNewsComponent,
    NewsDetailComponent
  ],
})
export class ManagementNewsModule {
}
