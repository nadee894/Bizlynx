import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bizlynx';

  // routeUrl: string;

  // constructor(public _router: Route) {
  //   // subscribe to the router events in order to always get the current url
  //   this._router.events.subscribe(() => this.routeUrl = this._router.url);
  // }

  // private hasMatches(...values: string[]): boolean {
  //   let matchFound: boolean = false;

  //   // check for null or undefined first
  //   if (this.routeUrl) {
  //     for (i = 0; i < values.length; i++) {
  //       if (this.routeUrl.indexOf(values[i]) > -1) {
  //         matchFound = true;
  //         break;
  //       }
  //     }
  //   }
  //   return matchFound;
  // }
}


