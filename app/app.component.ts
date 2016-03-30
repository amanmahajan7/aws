import { Component } from 'angular2/core';
import { Aws } from './aws/aws';
import { AwsGroup } from './aws/aws.group';
import { HeaderComponent } from './header/header.component';
import { AwsListComponent } from './aws/aws.list.component';

@Component({
    selector: 'app',
    directives: [HeaderComponent, AwsListComponent],
    template: `
        <header></header>
        <aws-list [groups]="groups"><aws-list>
    `
})
export class AppComponent {
    title = 'Amazon Web Services';
    groups = GROUPS;
}

var GROUPS: AwsGroup[] = [{
    title: 'Compute',
    services: [{
        id: 1,
        title: 'EC2',
        detail: 'Virtual Servers in the Cloud',
        image: ''
    },{
        id: 2,
        title: 'EC2 Container Service',
        detail: 'Run and Manage Docker Containers',
        image: ''
    }]
}, {
        title: 'Storage & Content Delivery',
        services: [{
            id: 1,
            title: 'S3',
            detail: 'Scalable Storage in the Cloud',
            image: ''
        },{
            id: 2,
            title: 'CloudFront',
            detail: 'Global Content Delivery Network',
            image: ''
        }]
    }];