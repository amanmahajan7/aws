import { Component } from 'angular2/core';
import { Aws } from './aws/aws';
import { AwsGroup } from './aws/aws.group';
import { HeaderComponent } from './header/header.component';
import { AwsListComponent } from './aws/aws.list.component';

@Component({
    selector: 'app',
    directives: [HeaderComponent, AwsListComponent],
    template: `
        <header></header>
        <aws-list [groups]="groups"><aws-list>
    `
})
export class AppComponent {
    title = 'Amazon Web Services';
    groups = GROUPS;
}

var GROUPS: AwsGroup[] = [
  { title: 'First', services : [ { id: 1, title: 'First Title', detail: '', image: '' } ] },
  { title: 'Second', services : [ { id: 2, title: 'Second Title', detail: '', image: '' } ] }
];