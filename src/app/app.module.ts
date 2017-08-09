import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Earnify } from './app.component';
import { FormsModule }   from '@angular/forms';

/* Pages
*/
import { HomePage } from '../pages/home/home';
import { GroupPage } from '../pages/group/group';
import { RegisterPage } from '../pages/register/register';
import { RoulettePage } from '../pages/roulette/roulette';
import {ParticipantPage} from '../pages/participant/participant';

/* Extras*/
import { TransactionManager } from '../utils/TransactionManager';
import { PageManager } from '../utils/PageManager';


import {Contacts} from 'ionic-native';

@NgModule({
  declarations: [
    Earnify,
    HomePage,
    RegisterPage,
    GroupPage,
    RoulettePage,
    ParticipantPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(Earnify)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Earnify,
    HomePage,
    RegisterPage,
    GroupPage,
    RoulettePage,
    ParticipantPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
