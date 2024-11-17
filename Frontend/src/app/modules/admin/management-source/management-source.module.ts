import {NgModule} from "@angular/core";
import {ManagementSourceRoutingModule} from "./management-source-routing.module";
import { ManagementSourceComponent } from './pages/management-source/management-source.component';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  imports: [ManagementSourceRoutingModule, SharedModule],
  declarations: [
    ManagementSourceComponent,
  ],
})
export class ManagementSourceModule {}
