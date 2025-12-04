import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { Component } from '@angular/core';
import { TarotComponent } from './components/tarot.component/tarot.component';
import { AboutComponent } from './components/about.component/about.component';
import { LearnComponent } from './components/learn.component/learn.component';
import { ServicesComponent } from './components/services.component/services.component';
import { NotFound } from './components/not.found/not.found';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    { path: 'tarot', component:TarotComponent },
    { path: 'about', component: AboutComponent },
    { path: 'learn', component: LearnComponent },
    { path: 'services', component: ServicesComponent },
    { path: ' ', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFound }
    
];
