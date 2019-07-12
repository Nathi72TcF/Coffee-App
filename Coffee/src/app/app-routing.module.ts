import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'neworder', loadChildren: './neworder/neworder.module#NeworderPageModule' },
  { path: 'placeorder/:id', loadChildren: './placeorder/placeorder.module#PlaceorderPageModule' },
  { path: 'vieworder', loadChildren: './vieworder/vieworder.module#VieworderPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
