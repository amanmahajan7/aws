import { Component, Input } from 'angular2/core';
import { AwsGroup } from './aws.group';
import { AwsComponent} from './aws.component';

@Component({
    selector: 'aws-group',
    directives: [AwsComponent],
    styles: [`
        .aws-group {
        }
        
        .aws-group-title {
            margin: 0 0 5px;
            font-weight: normal;
            font-size: 15px;
            color: #666;
        }
    `],
    template: `
        <div class="aws-group">
            <div class="aws-group-title">{{group.title}}<div>
            <aws *ngFor="#service of group.services" [service]="service"></aws>
        </div>
    `
})
export class AwsGroupComponent {
    @Input()
    group : AwsGroup;
}