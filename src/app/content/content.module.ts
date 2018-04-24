import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { RenderImgComponent } from './render-img/render-img.component';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  exports: [
      ContentRoutingModule
  ],
  declarations: [RenderImgComponent]
})
export class ContentModule { }
