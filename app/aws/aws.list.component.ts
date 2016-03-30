import { Component, Input } from 'angular2/core';
import { AwsGroup } from './aws.group';
import { AwsGroupComponent } from './aws.group.component';

@Component({
    selector: 'aws-list',
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
export class AwsListComponent {
    @Input()
    groups: AwsGroup[];
}