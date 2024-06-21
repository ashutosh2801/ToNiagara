import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { App as CapacitorApp } from '@capacitor/app';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

CapacitorApp.addListener('backButton', ({canGoBack}) => {
    if(!canGoBack){
      CapacitorApp.exitApp();
    } else {
      window.history.back();
    }
}); 
