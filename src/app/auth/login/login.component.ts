import { Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AuthStateService } from '@shared/state/auth-state.service'

@Component({
    standalone: true,
    imports: [RouterLink],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    authStateService = inject(AuthStateService)
    login() {
        this.authStateService.login('admin274@yopmail.com', 'Hola123?')
    }
}
