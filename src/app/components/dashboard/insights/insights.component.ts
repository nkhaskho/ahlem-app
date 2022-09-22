import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {


  public chart: any;
  stats = [
    {
      name: 'Traffic',
      value: 357451,
      percentage: 1,
    },
    {
      name: 'New users',
      value: 2514,
      percentage: -3.45,
    },
    {
      name: 'Sales',
      value: 924,
      percentage: -1.1,
    },
    {
      name: 'Performance',
      value: 49,
      percentage: 12,
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart
      data: {
        labels: [
          'On-going',
          'Closed',
          'In progress'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(98, 241, 82)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        aspectRatio:2.5
      }   
    });
  }

}
