import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ManagementNewsComponent} from "./pages/management-news/management-news.component";
import {NewsDetailComponent} from "./pages/news-detail/news-detail.component";
import {FormNewsComponent} from "./pages/form-news/form-news.component";

const routes: Routes = [
  {path: "", redirectTo: "list", pathMatch: "full"},
  {path: "list", component: ManagementNewsComponent, data: {breadcrumb: 'List'}},
  {path: 'detail/:id', component: NewsDetailComponent, data: {breadcrumb: 'Detail'}},
  {path: 'add',component: FormNewsComponent, data: {breadcrumb: 'Add News'}},
  {path: ':id/update',component: FormNewsComponent, data: {breadcrumb: 'Update News'}},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementNewsRoutingModule {
}
