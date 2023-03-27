import { MovieDetailsComponent } from './Component/movie-details/movie-details.component';
import { MovieListComponent } from './Component/movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  component:MovieListComponent
},{
  path:'movie-details/:id',
  component:MovieDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
