import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { HeaderComponent } from './header/header.component';
import { AwsListComponent } from './aws/aws.list.component';
import { EC2Component } from './ec2/ec2.component';

@RouteConfig([
    { path: '/', name: 'AwsList', component: AwsListComponent, useAsDefault: true },
    { path: '/EC2', name: 'EC2', component: EC2Component }
])
@Component({
    selector: 'app',
    directives: [
        ROUTER_DIRECTIVES, 
        HeaderComponent
    ],
    providers: [],
    template: `
        <header></header>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = 'Amazon Web Services';
}