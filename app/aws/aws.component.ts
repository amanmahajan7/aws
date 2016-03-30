import { Component, Input } from 'angular2/core';
import { Aws } from './aws';

@Component({
    selector: 'aws',
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
        <a class="aws" href="#">
            <div class="aws-title">{{service.title}}</div>
            <div class="aws-detail">{{service.detail}}</div>
        </a>
    `
})
export class AwsComponent {
    @Input()
    service: Aws;
}