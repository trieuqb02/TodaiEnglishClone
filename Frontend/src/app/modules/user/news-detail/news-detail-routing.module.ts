import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NewsDetailComponent} from "./pages/news-detail/news-detail.component";

const routes: Routes = [
  {path: ':newsId', component: NewsDetailComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsDetailRoutingModule {}
