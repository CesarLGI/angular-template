import { Route } from '@angular/router'

export default [
    {
        path: '',
        loadComponent: () => import('./features.component').then((c) => c.FeaturesComponent),
        children: [
            { path: 'home', title: 'Home', loadComponent: () => import('./home/home.component').then((c) => c.HomeComponent) },
            {
                path: 'users',
                title: 'Users',
                loadComponent: () => import('./users/pages/users.component').then((c) => c.UsersComponent),
            },
            {
                path: 'customers',
                title: 'Customers',
                loadComponent: () => import('./customers/pages/customers.component').then((c) => c.CustomersComponent),
            },
            { path: '**', redirectTo: 'home' }, //TODO: Definir si se agrega un NotFound para rutas desconocidas
        ],
    },
] satisfies Route[]
