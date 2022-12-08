import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomComponent } from './hom/hom.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { WhereComponent } from './where/where.component';

const routes: Routes = [
  { path: '', redirectTo: '/hom', pathMatch: 'full' },
  { path: 'hom', component: HomComponent },
  {path: 'about',component: AboutComponent},
  { path: 'menu', component: MenuComponent },
  { path: 'where', component: WhereComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
