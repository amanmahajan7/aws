import { Component, Input } from 'angular2/core';
import { AwsGroup } from './aws.group';
import { AwsComponent} from './aws.component';

@Component({
    selector: 'aws-group',
    directives: [AwsComponent],
    template: `
            <h2>{{group.title}}<h2>
            <aws *ngFor="#service of group.services" [service]="service"></aws>
    `
})
export class AwsGroupComponent {
    @Input()
    group : AwsGroup;
}