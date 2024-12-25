import {NgModule} from "@angular/core";
import {VideoRoutingModule} from "./video-routing.module";
import { VideoComponent } from './pages/video/video.component';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  imports: [
    VideoRoutingModule,
    SharedModule
  ],
  declarations: [
    VideoComponent
  ],
})
export class VideoModule {}
