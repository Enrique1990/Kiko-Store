import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing';
import { MatButtonModule } from '@angular/material/button';
// import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [BannerComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MatButtonModule],
  exports: [MatButtonModule],
})
export class HomeModule {}
