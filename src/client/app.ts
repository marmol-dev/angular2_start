import {Component, Directive, ElementRef, Renderer, OnInit, Injectable} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, HTTP_PROVIDERS, URLSearchParams} from 'angular2/http';
import 'rxjs/Rx';



@Directive({
  selector: '[x-large]'
})
export class XLarge {
  constructor(element: ElementRef, renderer: Renderer) {
    // we must interact with the dom through Renderer for webworker/server to see the changes
    renderer.setElementStyle(element, 'fontSize', 'x-large');
  }
}


@Component({
  selector: 'home',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl: 'views/home.html'
})
export class Home {

  constructor(){

  }


}

@Component({
  selector: 'about',
  template: `
  About
  `
})
export class About {
}

@Component({
  selector: 'app',
  directives: [ ...ROUTER_DIRECTIVES, XLarge ],
  template: `
  <div class="container">
    <main>
      <router-outlet></router-outlet>
    </main>
  </div>
  `
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home' },
  { path: '/home', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
])
export class App {
  name: string = 'AngularConnect';
}
