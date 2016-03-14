import {Component} from 'angular2/core';
import {RouterOutlet, RouteConfig, RouteDefinition} from 'angular2/router';
import {APP_ROUTES} from './app.routes';
import {NavbarComponent} from './navbar/navbar.component';
import {LoggerService} from './blocks/logger.service';
import {Http} from 'angular2/http';
import 'rxjs/Rx';

@Component({
    selector: 'main-app',
    templateUrl: 'app/app.html',
    directives: [RouterOutlet, NavbarComponent]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
    public appRoutes: RouteDefinition[];
    private logger: LoggerService;

    constructor(logger: LoggerService, private http: Http) {
        this.logger = logger;
        this.appRoutes = APP_ROUTES;
        http.get('https://stormy-cliffs-89416.herokuapp.com/cliente')
          .map(res => res.text())
          .do(data => console.log(data))
          .subscribe();
          console.log('asa');
    }
}
