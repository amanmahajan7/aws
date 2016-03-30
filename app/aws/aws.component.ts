import { Component, Input } from 'angular2/core';
import { Aws } from './aws';

@Component({
    selector: 'aws',
    template: `
        <h3>{{service.title}}</h3>
        <div>{{service.detail}}</div>
    `
})
export class AwsComponent {
    @Input()
    service : Aws; 
}