import { inject } from '@angular/core'

import { CanActivateFn, Router } from '@angular/router'
import { AuthStateService } from '@shared/state/auth-state.service'

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
    const authStateService = inject(AuthStateService)
    const router = inject(Router)
    //Se puede guardar la url actual y guardarla en el localstorage. En el caso que vuelva a loguearse
    //se lo redirecciona a la url donde estaba
    if (authStateService.isAuthenticated()) return true
    router.navigate(['auth/login'])
    return false
}
