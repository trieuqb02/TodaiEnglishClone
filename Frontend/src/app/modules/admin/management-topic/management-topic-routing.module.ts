import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ManagementTopicComponent} from "./pages/management-topic/management-topic.component";

const routes: Routes = [
  {path: "", redirectTo: "list", pathMatch: "full"},
  {path: "list", component: ManagementTopicComponent, data: { breadcrumb: 'List' }},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementTopicRoutingModule { }
