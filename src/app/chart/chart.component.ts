import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  chart: any = [];

  constructor() {}

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: [
          'jan',
          'fab',
          'March',
          'April',
          'May',
          'June',
          'July',
          'Aug',
          'Sept',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: '# of Votes',
            data: [15, 30, 44, 77, 11, 13, 21, 14, 21, 15, 22, 10],
            borderWidth: 4,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // chart end
    //

    this.chart = new Chart('bar', {
      type: 'bar',
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 13, 5, 12, 23, 33],
            borderWidth: 2,
            backgroundColor: 'lightblue',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // chart end
    //
    this.chart = new Chart('pie', {
      type: 'bar',
      data: {
        labels: [
          'skyblue',
          'darkblue',
          'white',
          'Green',
          'gray',
          'black',
          'maroon',
          'beige',
          'paleblub',
          'navyblue',
          'brown',
          'biolte',
        ],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 13, 5, 12, 3, 12, 19, 13, 5, 12, 3],
            borderWidth: 1,
            backgroundColor: 'lightblue',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // chart end
    //
    this.chart = new Chart('line', {
      type: 'line',
      data: {
        labels: ['lightblack', 'red', 'Yellow', 'navy', 'Purple', 'lightgreen'],
        datasets: [
          {
            label: '# of Votes',
            data: [2, 9, 3, 5, 12, 3],
            borderWidth: 4,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
