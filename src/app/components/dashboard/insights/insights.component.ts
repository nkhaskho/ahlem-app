import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {

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
  }

}
