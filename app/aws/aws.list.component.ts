import { Component } from 'angular2/core';
import { AwsGroup } from './aws.group';
import { AwsGroupComponent } from './aws.group.component';

@Component({
    selector: 'aws-list',
    directives: [AwsGroupComponent],
    inputs: ['groups'],
    template: `
        <div class="container-fluid">
            <aws-group *ngFor="#group of groups" [group]="group"></aws-group>
        </div>
    `
})
export class AwsListComponent {
    groups: AwsGroup[];
}