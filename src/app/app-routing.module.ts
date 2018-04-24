import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentModule } from './content/content.module';

const routes: Routes = [
    { path: 'content',  loadChildren: () => ContentModule },
    { path: '', redirectTo: '/content/render-img', pathMatch: 'full' }
]

@NgModule ({
    imports: [
        RouterModule.forRoot( routes, {
            useHash: true
        })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
