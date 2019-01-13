import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryChartDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const chart = {
      values: [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
      ],
      lables: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    };

    return { chart }
  }
}
