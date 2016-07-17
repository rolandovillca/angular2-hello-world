import { Component } from '@angular/core';

export class NetworkTraffic {
  id: number;
  name: string;
  status: string;
}

var TRAFFICS: NetworkTraffic[] = [
  { 'id': 11, 'name': 'Traffic 1', 'status': 'Up' },
  { 'id': 12, 'name': 'Traffic 2', 'status': 'Up' },
  { 'id': 13, 'name': 'Traffic 3', 'status': 'Up' },
  { 'id': 14, 'name': 'Traffic 4', 'status': 'Up' },
  { 'id': 15, 'name': 'Traffic 5', 'status': 'Down' },
  { 'id': 16, 'name': 'Traffic 6', 'status': 'Up' },
  { 'id': 17, 'name': 'Traffic 7', 'status': 'Unavailable' },
  { 'id': 18, 'name': 'Traffic 8', 'status': 'Up' },
  { 'id': 19, 'name': 'Traffic 9', 'status': 'Up' },
  { 'id': 20, 'name': 'Traffic 10', 'status': 'Up' }
];

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <br>
    <h2>Select One Traffic</h2>
    <ul class="report-traffic">
      <li *ngFor="let traffic of traffics"
          [class.selected]="traffic === selectedTraffic"
          (click)='onSelect(traffic)'>
        <span class="badge">{{traffic.id}}</span> {{traffic.name}} {{traffic.status}}
      </li>
    </ul>
    <div *ngIf="selectedTraffic">
      <h2>{{selectedTraffic.name}} - details!</h2>
      <div>
        <label>Id: </label>{{selectedTraffic.id}}
      </div>
      <div>
        <label>Name: </label>
        <input value="{{selectedTraffic.name}}" placeholder="name">
        <br>
        <label>Status: </label>
        <input [(ngModel)]="selectedTraffic.status" placeholder="status">
      </div>
    </div>
    `,
  styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .report-traffic {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .report-traffic li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .report-traffic li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .report-traffic li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .report-traffic .text {
      position: relative;
      top: -3px;
    }
    .report-traffic .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent {
  title = 'Network Traffic Reports';
  selectedTraffic: NetworkTraffic;
  public traffics = TRAFFICS;

  onSelect(traffic: NetworkTraffic) { this.selectedTraffic = traffic; }
}
