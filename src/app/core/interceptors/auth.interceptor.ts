import { inject } from '@angular/core'
import { HttpInterceptorFn } from '@angular/common/http'
import { catchError, switchMap, throwError } from 'rxjs'
import { AuthStateService } from '@shared/state/auth-state.service'

export const authInterceptor: HttpInterceptorFn = (request, next) => {
    const authStateService = inject(AuthStateService)

    const authRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${authStateService.token()}` },
        setParams: { socketId: '' },
    })

    return next(authRequest).pipe(
        catchError((error) => {
            if (error.status === 401 && authStateService.isAuthenticated()) {
                return authStateService.refreshToken().pipe(
                    switchMap((response) => {
                        authStateService.setAuth(response)
                        const newAuthRequest = request.clone({
                            setHeaders: { Authorization: `Bearer ${response.token}` },
                            setParams: { socketId: '' },
                        })
                        return next(newAuthRequest)
                    }),
                    catchError((refreshError: ErrorEvent) => {
                        const error = new Error(refreshError.error)
                        authStateService.logout()
                        return throwError(() => error)
                    })
                )
            }
            return throwError(() => 'Credenciales inválidas')
        })
    )
}
