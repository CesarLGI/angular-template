import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
    standalone: true,
    selector: 'register',
    imports: [RouterOutlet],
    template: `
        <h2>Register</h2>
        <router-outlet />
    `,
})
export class RegisterComponent {}
