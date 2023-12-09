import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SassMixinComponent } from './sass-mixin/sass-mixin.component';
import { SassConditionComponent } from './sass-condition/sass-condition.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sass-condition',
    pathMatch: 'full',
  },
  { path: 'sass-mixin', component: SassMixinComponent },
  { path: 'sass-condition', component: SassConditionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
