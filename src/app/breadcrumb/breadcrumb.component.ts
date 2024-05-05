// breadcrumb.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {BreadcrumbService } from '../breadcrumb.service';
import { Breadcrumb } from '../breadcrumb.interface';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs$: Observable<Breadcrumb[]> | undefined;

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
  }
}
