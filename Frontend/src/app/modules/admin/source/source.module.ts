import {NgModule} from "@angular/core";
import {SourceRoutingModule} from "./source-routing.module";
import { SourceComponent } from './pages/source/source.component';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  imports: [SourceRoutingModule, SharedModule],
  declarations: [
    SourceComponent,
  ],
})
export class SourceModule {}
