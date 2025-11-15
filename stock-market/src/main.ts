import { platformBrowser, BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './app/services/token-interceptor';
import { AppRoutingModule } from './app/app-routing-module';
import { FormsModule } from '@angular/forms';
import { App } from './app/app';

bootstrapApplication(App, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, FormsModule),
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        provideHttpClient(withInterceptorsFromDi(), withInterceptors([tokenInterceptor]))
    ]
})
  .catch(err => console.error(err));
