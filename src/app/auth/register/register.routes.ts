import { Route } from '@angular/router'

export default [
    {
        path: '',
        loadComponent: () => import('./pages/register.component').then((c) => c.RegisterComponent),
        children: [
            { path: 'step-1', title: 'Step 1', loadComponent: () => import('./pages/step-1.component').then((c) => c.Step1Component) },
            { path: 'step-2', title: 'Step 2', loadComponent: () => import('./pages/step-2.component').then((c) => c.Step2Component) },
            { path: '', redirectTo: 'step-1', pathMatch: 'full' },
        ],
    },
] satisfies Route[]
