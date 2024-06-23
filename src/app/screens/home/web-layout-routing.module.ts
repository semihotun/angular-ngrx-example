import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { WeblayoutComponent } from './layout/weblayout/weblayout.component';
import { LikesComponent } from './likes/likes.component';

const routes: Routes = [
  {
    path: '',
    component: WeblayoutComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'likes', component: LikesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebLayoutRoutingModule {}
