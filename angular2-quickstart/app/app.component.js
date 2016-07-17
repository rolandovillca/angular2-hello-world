"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var NetworkTraffic = (function () {
    function NetworkTraffic() {
    }
    return NetworkTraffic;
}());
exports.NetworkTraffic = NetworkTraffic;
var TRAFFICS = [
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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Network Traffic Reports';
        this.traffics = TRAFFICS;
    }
    AppComponent.prototype.onSelect = function (traffic) { this.selectedTraffic = traffic; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <br>\n    <h2>Select One Traffic</h2>\n    <ul class=\"report-traffic\">\n      <li *ngFor=\"let traffic of traffics\"\n          [class.selected]=\"traffic === selectedTraffic\"\n          (click)='onSelect(traffic)'>\n        <span class=\"badge\">{{traffic.id}}</span> {{traffic.name}} {{traffic.status}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedTraffic\">\n      <h2>{{selectedTraffic.name}} - details!</h2>\n      <div>\n        <label>Id: </label>{{selectedTraffic.id}}\n      </div>\n      <div>\n        <label>Name: </label>\n        <input value=\"{{selectedTraffic.name}}\" placeholder=\"name\">\n        <br>\n        <label>Status: </label>\n        <input [(ngModel)]=\"selectedTraffic.status\" placeholder=\"status\">\n      </div>\n    </div>\n    ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .report-traffic {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .report-traffic li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .report-traffic li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .report-traffic li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .report-traffic .text {\n      position: relative;\n      top: -3px;\n    }\n    .report-traffic .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map