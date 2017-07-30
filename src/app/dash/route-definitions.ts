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




// const routes: Routes = [
//     {
//         path: 'bar_chart',
//         component: Dash.TestDashComponent,
//     },
// ];

export const dashRouting = RouterModule.forRoot(routes);
