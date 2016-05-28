function AppComponent() {}

AppComponent.annotations = [
  new angular.ComponentAnnotation({ selector: 'my-app' }),
  new angular.ViewAnnotation({ template: '<h1>My First Angular 2 App</h1>' })
];

document.addEventListener('DOMContentLoaded', function() {
  angular.bootstrap(AppComponent);
});

//<script src="https://code.angularjs.org/2.0.0-alpha.26/angular2.sfx.dev.js"></script>