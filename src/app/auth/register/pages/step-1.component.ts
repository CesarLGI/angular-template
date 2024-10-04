import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
    standalone: true,
    template: `
        <p>Step 1</p>
        <button [routerLink]="['/auth/login']">Login</button>
        <button [routerLink]="['/auth/register/step-2']">Next</button>
    `,
    imports: [RouterLink],
})
export class Step1Component {}
