import {NgModule} from "@angular/core";
import {ManagementTopicRoutingModule} from "./management-topic-routing.module";
import { ManagementTopicComponent } from './pages/management-topic/management-topic.component';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
    imports: [ManagementTopicRoutingModule, SharedModule],
  declarations: [
    ManagementTopicComponent
  ],
})
export class ManagementTopicModule {}
