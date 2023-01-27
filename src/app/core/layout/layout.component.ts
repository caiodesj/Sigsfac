import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  layout = 'default';
  constructor(public _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.setLayout();
  }

  private setLayout(): void {
    // Get the current activated route
    let route = this._activatedRoute;
    const paths = route.pathFromRoot;
    paths.forEach((path) => {
      // Check if there is a 'layout' mock-api
      if (
        path.routeConfig &&
        path.routeConfig.data &&
        path.routeConfig.data['layout']
      ) {
        // Set the layout
        this.layout = path.routeConfig.data['layout'];
      }
    });
  }
}
