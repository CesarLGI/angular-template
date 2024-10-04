import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
    standalone: true,
    template: `
        <p>Step 2</p>
        <button [routerLink]="['/auth/register/step-1']">Previous</button>
    `,
    imports: [RouterLink],
})
export class Step2Component {}
