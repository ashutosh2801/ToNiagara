import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'private-tour-niagara-falls-pickup-locations',
    loadChildren: () => import('./pages/private-tours/private-tours.module').then( m => m.PrivateToursPageModule)
  },
  {
    path: 'category/:id',
    loadChildren: () => import('./pages/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'tour/:id',
    loadChildren: () => import('./pages/tour/tour.module').then( m => m.TourPageModule)
  },
  {
    path: 'tour-review/:id',
    loadChildren: () => import('./pages/tour-review/tour-review.module').then( m => m.TourReviewPageModule)
  },
  {
    path: 'tour-gallery/:id',
    loadChildren: () => import('./pages/tour-gallery/tour-gallery.module').then( m => m.TourGalleryPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'blog/:id',
    loadChildren: () => import('./pages/blog-detail/blog-detail.module').then( m => m.BlogDetailPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
