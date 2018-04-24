import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RenderImgComponent } from './render-img/render-img.component'

const routes: Routes = [
    {
        path: '',
        children:[
            { path:'render-img', component: RenderImgComponent },
            { path: '', redirectTo:'render-img', pathMatch: 'full' }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
