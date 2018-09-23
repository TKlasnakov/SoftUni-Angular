/**
 * Created by TKlas on 23.9.2018 year..
 */

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import  { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
