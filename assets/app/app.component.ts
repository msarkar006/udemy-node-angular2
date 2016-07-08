import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AuthenticationComponent} from "./auth/authentication.component";
import {MessagesComponent} from "./messages/messages.component";
import {HeaderComponent} from "./header.component";
import {ErrorComponent} from "./erros/error.component";

@Component({
    selector: 'my-app',
    template: `  
        <div class="container">
            <my-header></my-header>
            <router-outlet></router-outlet>
            <my-error></my-error>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, ErrorComponent]
})

@RouteConfig([
    {path: '/', name: 'Messages', component: MessagesComponent, useAsDefault: true},
    {path: '/auth/...', name: 'Auth', component: AuthenticationComponent}
])
export class AppComponent {



}