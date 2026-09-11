import { provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { AppRootComponent } from './app/appb.component';
import { RootComponent } from "./app/root-component/root-component";
import { StaticShowcaseComponent } from "./app/static-showcase/static-showcase.component";
import { LoadComponent } from './app/load/load.component';


const bootstrap = (context: BootstrapContext) => bootstrapApplication(LoadComponent, {...config, providers: [provideZoneChangeDetection(), ...config.providers]}, context);

export default bootstrap;
