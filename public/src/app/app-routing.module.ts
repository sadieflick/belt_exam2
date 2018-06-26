import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'products/new', component: NewComponent },
  { path: 'products/:id', component: ShowComponent },
  { path: 'products', component: HomeComponent },
  { path: 'products/:id/edit', component: EditComponent},
  { path: '', pathMatch: 'full', redirectTo: '/products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
