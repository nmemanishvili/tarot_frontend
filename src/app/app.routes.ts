import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { TarotComponent } from './components/tarot.component/tarot.component';
import { AboutComponent } from './components/about.component/about.component';
import { LearnComponent } from './components/learn.component/learn.component';
import { ServicesComponent } from './components/services.component/services.component';
import { NotFound } from './components/not.found/not.found';



export const routes: Routes = [
    {
        path: 'about', //<domain>/about
        component: AboutComponent
    },
    {
        path: 'tarot', //<domain>/tarot
        component: TarotComponent
    }
    
];

