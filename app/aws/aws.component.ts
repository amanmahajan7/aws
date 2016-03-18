import { Component } from 'angular2/core';
import { Aws } from './aws';

@Component({
    selector: 'aws',
    inputs: ['service'],
    template: `
        <h2>{{service.title}}</h2>
        <div>{{service.detail}}</div>
    `
})
export class AwsComponent {
    service : Aws; 
}