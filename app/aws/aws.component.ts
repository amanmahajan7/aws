import { Component, Input } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Aws } from './aws';

@Component({
    selector: 'aws',
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        .aws {
            text-decoration:none;
        }
            .aws > .aws-title {
                font-size: 15px;
                color: #333;
            }
            
            .aws > .aws-detail {
                padding: 0;
                margin: 0;
                color: #666;
                font-size: 11px;
                line-height: 13px;
            }
        
            .aws:hover > .aws-title ,
            .aws:hover > .aws-detail {
                color: #e47911;
            }
    `],
    template: `
        <a class="aws" [routerLink]="['EC2']">
            <div class="aws-title">{{service.title}}</div>
            <div class="aws-detail">{{service.detail}}</div>
        </a>
    `
})
export class AwsComponent {
    @Input()
    service: Aws;
}