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
import {GraphicsPage} from '../pages/graphics/graphics';

/* Extras*/
import { TransactionManager } from '../utils/TransactionManager';
import { PageManager } from '../utils/PageManager';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {FirebaseListObservable} from 'angularfire2/database';
import {Contacts} from 'ionic-native';
export const firebaseConfig = {
      apiKey: "AIzaSyCJVHll25fGsCXfZGTY-oFewxXVvTd2DKc",
      authDomain: "earnify-c4d7f.firebaseapp.com",
      databaseURL: "https://earnify-c4d7f.firebaseio.com",
      projectId: "earnify-c4d7f",
      storageBucket: "earnify-c4d7f.appspot.com",
      messagingSenderId: "861574785619"
};
@NgModule({
  declarations: [
    Earnify,
    HomePage,
    RegisterPage,
    GroupPage,
    RoulettePage,
    ParticipantPage,
    GraphicsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(Earnify),
    AngularFireModule.initializeApp(firebaseConfig,'Earnify'),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Earnify,
    HomePage,
    RegisterPage,
    GroupPage,
    RoulettePage,
    ParticipantPage,
    GraphicsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
