import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiaLayoutMenuComponent } from './chia-layout-menu/chia-layout-menu.component';
import { ChiaLayoutCarouselComponent } from './chia-layout-carousel/chia-layout-carousel.component';
import { PromotionComponent } from './promotion/promotion.component';

import {ChiaLayoutBestModule} from './chia-layout-best/chia-layout-best.module';
import { ChiaLayoutBestComponent } from './chia-layout-best/chia-layout-best.component'

@NgModule({
  declarations: [ChiaLayoutMenuComponent, ChiaLayoutCarouselComponent, PromotionComponent, ChiaLayoutBestComponent],
  exports:[ChiaLayoutMenuComponent, ChiaLayoutCarouselComponent, PromotionComponent,ChiaLayoutBestComponent],
  imports: [
    CommonModule,ChiaLayoutBestModule
  ]
})
export class ChiaLayoutModule { }
