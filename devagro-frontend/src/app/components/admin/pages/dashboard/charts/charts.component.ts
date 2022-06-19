import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['Soja', 'Milho', 'Cevada', 'Trigo', 'Café', 'Chia'],
        datasets: [
          {
            label: 'Safra por hectares',
            data: [12, 20, 3, 5, 2, 3],
            backgroundColor: [
              'rgb(55, 95, 36, 1)',
              'rgb(55, 95, 36, 1)',
              'rgba(55, 95, 36, 1)',
              'rgba(55, 95, 36, 1)',
              'rgba(55, 95, 36, 1)',
              'rgba(55, 95, 36, 1)',
            ],
            borderColor: [
              'rgba(55, 95, 36, 1)',
              'rgba(55, 95, 36, 1)',
              'rgba(55, 95, 36, 1)',
              'rgba(55, 95, 36, 1)',
              'rgba(55, 95, 36, 1)',
              'rgba(55, 95, 36, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
