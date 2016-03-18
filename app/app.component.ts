import { Component } from 'angular2/core';
import { HeaderComponent } from './header/header.component';
import { Aws } from './aws/aws';
import { AwsGroup } from './aws/aws.group';
import { AwsListComponent } from './aws/aws.list.component';

@Component({
    selector: 'app',
    directives: [HeaderComponent, AwsListComponent],
    template: `
        <header></header>
        <aws-list [groups]="groups"><aws-list>
    `
})
export class App {
    title = 'Amazon Web Services';
    groups = GROUPS;
}



var GROUPS: AwsGroup[] = [
  { title: 'First', services : [ { id: 1, title: '', detail: '', image: '' } ] },
  { title: 'Second', services : [ { id: 2, title: '', detail: '', image: '' } ] }
];