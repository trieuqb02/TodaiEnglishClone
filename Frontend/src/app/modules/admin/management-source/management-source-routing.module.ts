import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ManagementSourceComponent} from "./pages/management-source/management-source.component";


const routes: Routes = [
  {path: "", redirectTo: "list", pathMatch: "full"},
  {path: "list", component: ManagementSourceComponent, data: { breadcrumb: 'List' }},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementSourceRoutingModule { }
