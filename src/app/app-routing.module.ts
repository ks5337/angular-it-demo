import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'button', loadChildren: './button/button.module#ButtonPageModule' },
  { path: 'toolbar', loadChildren: './toolbar/toolbar.module#ToolbarPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'form', loadChildren: './form/form.module#FormPageModule' },
  { path: 'slides', loadChildren: './slides/slides.module#SlidesPageModule' },
  { path: 'searchbar', loadChildren: './searchbar/searchbar.module#SearchbarPageModule' },
  { path: 'segment', loadChildren: './segment/segment.module#SegmentPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
