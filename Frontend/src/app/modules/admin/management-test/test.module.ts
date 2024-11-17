import {NgModule} from "@angular/core";
import {TestRoutingModule} from "./test-routing.module";
import { PagesComponent } from './pages/pages.component';

@NgModule({
  imports: [TestRoutingModule],
  declarations: [
    PagesComponent
  ],
})
export class TestModule {}
