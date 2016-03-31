import { Component, Input, OnInit } from 'angular2/core';
import { AwsGroup } from './aws.group';
import { AwsGroupComponent } from './aws.group.component';

@Component({
    directives: [AwsGroupComponent],
    template: `
        <div class="container-fluid">
            <h1>Amazon Web Services</h1>
            <div class="row">
                <aws-group class="col-sm-4" *ngFor="#group of groups" [group]="group"></aws-group>
            </div>
        </div>
    `
})
export class AwsListComponent implements OnInit {
    @Input()
    groups: AwsGroup[];
    
    ngOnInit() {
        this.groups = GROUPS;
    }
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