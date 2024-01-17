import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Highcharts1Component } from "./Componenets/highcharts-1/highcharts-1.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, Highcharts1Component]
})
export class AppComponent {
  title = 'Highcharts_Test';
}
