import { provideZoneChangeDetection } from "@angular/core";

import {  } from '@angular/compiler'
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { RootComponent } from './app/root-component/root-component';
import { StaticShowcaseComponent } from "./app/static-showcase/static-showcase.component";
import { LoadComponent } from './app/load/load.component';

bootstrapApplication(LoadComponent, {...appConfig, providers: [provideZoneChangeDetection(), ...appConfig.providers]})
  .catch((err) => console.error(err));
