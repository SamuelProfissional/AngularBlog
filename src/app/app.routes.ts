import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Post1Component } from './post1/post1.component';
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'post-detail', component: PostDetailComponent },
    { path: 'post-list', component: PostListComponent },
    {
        path: 'post-list', component: PostListComponent,
        children: [
            { path: 'post1', component: Post1Component },
            { path: 'post2', component: Post2Component},
            { path: 'post3', component: Post3Component}
        ]
    },
    { path: '**', component: NotFoundComponent }
];
