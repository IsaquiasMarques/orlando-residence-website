import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ImplantationComponent } from './implantation/implantation.component';
import { TypologiesComponent } from './typologies/typologies.component';
import { LeisureComponent } from './leisure/leisure.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HumanizedModelsComponent } from './humanized-models/humanized-models.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SharedModule } from '../shared/shared.module';
import { BannerMobileComponent } from './banner-mobile/banner-mobile.component';
import { TypologiesMobileComponent } from './typologies-mobile/typologies-mobile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutComponent,
    ImplantationComponent,
    TypologiesComponent,
    LeisureComponent,
    GalleryComponent,
    HumanizedModelsComponent,
    NewsletterComponent,
    BannerMobileComponent,
    TypologiesMobileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule { }
