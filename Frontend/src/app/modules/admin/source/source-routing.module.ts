import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SourceComponent} from "./pages/source/source.component";


const routes: Routes = [
  {path: "", redirectTo: "list", pathMatch: "full"},
  {path: "list", component: SourceComponent, data: { breadcrumb: 'List' }},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SourceRoutingModule { }
