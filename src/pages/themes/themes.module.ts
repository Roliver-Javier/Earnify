import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThemesPage } from './themes';

@NgModule({
  declarations: [
    ThemesPage,
  ],
  imports: [
    IonicPageModule.forChild(ThemesPage),
  ],
  exports: [
    ThemesPage
  ]
})
export class ThemesPageModule {}
