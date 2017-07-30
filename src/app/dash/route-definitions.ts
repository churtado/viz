import { Routes, RouterModule } from '@angular/router';
import { DASHES } from './../mock-vizzes';

export let routes: Routes = [];

/**
 * quick way to load the routes in
 * and configure them in only one place
 * maybe later I'll make a service
 */
DASHES.forEach((dash) => {
    routes.push(
        {
            path: dash.url,
            component: dash.component
        }
    );
});

/**
 * vega dashboards will work differently
 * so we'll create a custom route
 */

export const dashRouting = RouterModule.forRoot(routes);
