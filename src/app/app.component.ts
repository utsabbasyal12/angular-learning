// app.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { BreadcrumbService } from './breadcrumb.service';
import { Breadcrumb } from './breadcrumb.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.buildBreadcrumbs())
    ).subscribe(breadcrumbs => {
      this.breadcrumbService.setBreadcrumbs(breadcrumbs);
    });
  }

  buildBreadcrumbs(): Breadcrumb[] {
    let breadcrumbs: Breadcrumb[] = [];
    let currentRoute: ActivatedRoute | null = this.activatedRoute.root;
    let url = '';

    do {
      if (!currentRoute) break;
      const childrenRoutes = currentRoute.children;
      currentRoute = null;
      childrenRoutes.forEach(route => {
        if (route.outlet === 'primary') {
          const routeSnapshot = route.snapshot;
          url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
          breadcrumbs.push({ label: routeSnapshot.data['breadcrumb'], url: url });
          currentRoute = route;
        }
      });
    } while (currentRoute);

    return breadcrumbs;
  }
}
