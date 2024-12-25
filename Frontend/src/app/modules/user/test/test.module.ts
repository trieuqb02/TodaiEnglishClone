import {NgModule} from "@angular/core";
import {TestRoutingModule} from "./test-routing.module";
import { TestComponent } from './pages/test/test.component';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  imports: [
    TestRoutingModule,
    SharedModule
  ],
  declarations: [
    TestComponent
  ],
})
export class TestModule {}
