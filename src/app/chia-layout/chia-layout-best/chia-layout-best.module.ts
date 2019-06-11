import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSmartPhoneComponent } from './best-smart-phone/best-smart-phone.component';
import { BestLaptoopComponent } from './best-laptoop/best-laptoop.component';

@NgModule({
  declarations: [BestSmartPhoneComponent, BestLaptoopComponent],
  exports:[BestSmartPhoneComponent, BestLaptoopComponent],
  imports: [
    CommonModule
  ]
})
export class ChiaLayoutBestModule { }
