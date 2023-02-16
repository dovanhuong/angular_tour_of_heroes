import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Component, Input } from '@angular/core';
@Component({
  selector:'app-greeting',
  template:'<h1>Hello, {{name}}!</h1>'
})
export class GreetingComponeent{
  @Input() name:string;
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// platformBrowserDynamic().bootstrapModule(Component)
//   .catch(err => console.error(err));
