import {NgModule} from "@angular/core";
import {ManagementUserRoutingModule} from "./management-user-routing.module";
import { ManagementUserComponent } from './pages/management-user/management-user.component';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  imports: [ManagementUserRoutingModule,SharedModule],
  declarations: [
    ManagementUserComponent
  ],
})
export class ManagementUserModule {}
