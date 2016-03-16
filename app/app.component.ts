import { Component } from 'angular2/core';
import { Header } from './header/header.component';

@Component({
    selector: 'app',
    template: `
        <header></header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-2">
                    Left Nav
                </div>
                <div class="col-sm-10">
                    Content
                </div>
            </div>
        </div>
    `,
    directives: [Header]
})
export class App {
    
}