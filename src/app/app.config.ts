import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom, inject} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {AppSettingsService} from "./core/services/app-settings.service";
import {catchError, from, Observable, switchMap, throwError} from "rxjs";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    // importProvidersFrom(BrowserModule, BrowserAnimationsModule),
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        }, // required for translation
      })
    ),
    // importProvidersFrom(
    //   provideFirebaseApp(() => initializeApp(environment.firebase))
    // ), // optional, firebase

    AppSettingsService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [HttpClient],
      multi: true,
    }
  ]
};
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'../assets/i18n_languajes/', '.json');
}

export function initializeApp() {
  const translate = inject(TranslateService);
  const appSettings = inject(AppSettingsService);
  return (): Promise<any> => {
    return new Promise<void>((resolve) => {
      appSettings.load().subscribe({
        next: () => {
          // Puedes realizar acciones adicionales después de cargar las configuraciones si es necesario
          translate.setDefaultLang('es_ES');
          translate.use('es_ES');

          resolve(); // Resuelve la promesa una vez que las configuraciones se hayan cargado
        },
        error: (error) => {
          console.error('Error al cargar las configuraciones:', error);
          resolve(); // Resuelve la promesa incluso si hay un error (puedes ajustar este comportamiento según tu necesidad)
        },
      });
    });
  };
}
