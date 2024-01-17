import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-highcharts-1',
  standalone: true,
  imports: [
    HighchartsChartModule,
    HttpClientModule
  ],
  templateUrl: './highcharts-1.component.html',
  styleUrl: './highcharts-1.component.css'
})
export class Highcharts1Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any;
  url: string = 'https://api.thingspeak.com/channels/2403503/fields/1.json?api_key=RCUO7MSHY7HEMZ2L&results=50'

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Make API call to fetch data
    this.http.get(this.url).subscribe((data: any) => {

      const apiData = [];
      const apiNames = []
      for (let i = 0; i < data.feeds.length; i++) {
        apiData.push(parseFloat(data.feeds[i].field1));
        apiNames.push(data.feeds[i].created_at);
      }
      // Process the data from the API call and update the chart options
      this.chartOptions = {
        chart: {
          type: 'area',
          // style the chart with some colors 
          backgroundColor: '#f4f4f4',
          panKey: 'shift',
          scrollablePlotArea: {
            minWidth: 600
        },

        },
        title: {
          text: 'Temperature'
        },
        xAxis: {
          categories: apiNames // Use the categories from the API call here
        },
        yAxis: {
          title: {
            text: 'Temperature (°C)'
          }
        },
        series: [{
          name: 'Temperature',
          data: apiData, // Use the data from the API call here
          color: 'green',
        }]
      };
      Highcharts.chart('container', this.chartOptions);
    });
  }


}
