import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { TestComponent } from './test/test.component';
import { Header2Component } from "../shared/header2/header2.component";


@Component({
    selector: 'app-root',
    imports: [
   
    RouterOutlet,
    FooterComponent,
    Header2Component,
    
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'site_portfolio';
}
