import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ManagementUserComponent} from "./pages/management-user/management-user.component";

const routes: Routes = [
  {path: "", redirectTo: "list", pathMatch: "full"},
  {path: "list", component: ManagementUserComponent, data: {breadcrumb: 'List'}},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementUserRoutingModule {
}
