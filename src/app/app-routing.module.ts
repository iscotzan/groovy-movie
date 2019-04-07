import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { route_paths } from './app-routing-paths.dict';

const routes: Routes = [
  { path: route_paths.homepage, component: HomepageComponent },
  { path: route_paths.detailsPage + ':id', component: DetailsPageComponent },
  { path: route_paths.watchlistPage, component: WatchlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
