import { Component } from 'angular2/core';

@Component({
    selector: 'header',
    template: `
        <nav class="navbar navbar-dark bg-inverse navbar-full">
            <a class="navbar-brand" href="#">Navbar</a>
            <ul class="nav navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">AWS<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                     <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Edit</a>
                </li>
            </ul>
        </nav>
    `
})
export class Header {
    
}