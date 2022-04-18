import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { LogoSvgComponent } from './logo-svg/logo-svg.component';
import { MainTextComponent } from './main-text/main-text.component';
import { ButtonComponent } from './button/button.component';
import { SecondRowComponent } from './second-row/second-row.component';
import { SecondRowItemComponent } from './second-row-item/second-row-item.component';
import { ThirdRowComponent } from './third-row/third-row.component';
import { ThirdLeftComponent } from './third-left/third-left.component';
import { ThirdRightComponent } from './third-right/third-right.component';
import { FourthRowComponent } from './fourth-row/fourth-row.component';
import { FifthRowComponent } from './fifth-row/fifth-row.component';
import { SixthRowComponent } from './sixth-row/sixth-row.component';
import { ReviewComponent } from './review/review.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FixedMenuComponent } from './fixed-menu/fixed-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    MainHeaderComponent,
    MenuListComponent,
    LogoSvgComponent,
    MainTextComponent,
    ButtonComponent,
    SecondRowComponent,
    SecondRowItemComponent,
    ThirdRowComponent,
    ThirdLeftComponent,
    ThirdRightComponent,
    FourthRowComponent,
    FifthRowComponent,
    SixthRowComponent,
    ReviewComponent,
    FooterComponent,
    FooterMenuComponent,
    FixedMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
