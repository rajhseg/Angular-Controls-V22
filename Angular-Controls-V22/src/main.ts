import { provideZoneChangeDetection } from "@angular/core";

import {  } from '@angular/compiler'
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { RootComponent } from './app/root-component/root-component';

bootstrapApplication(RootComponent, {...appConfig, providers: [provideZoneChangeDetection(), ...appConfig.providers]})
  .catch((err) => console.error(err));
