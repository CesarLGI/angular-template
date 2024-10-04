import { HttpClient, HttpHeaders } from '@angular/common/http'
import { computed, effect, inject, Injectable, signal } from '@angular/core'
import { Router } from '@angular/router'
import { map, Observable } from 'rxjs'
import { AuthModel } from '../models/interfaces/auth.interface'
import { LocalStorageService } from '@core/services/local-storage.service'
import { environment } from '@environments/environment'
import { AuthResponse } from '@shared/models/types/auth-response.type'

const INITIAL_STATE: AuthModel = {
    display: '',
    email: '',
    expirationDate: new Date(),
    id: '',
    isValid: false,
    pictureUrl: '',
    refreshToken: '',
    roleId: 0,
    token: '',
    userId: 0,
    userName: '',
}

@Injectable({
    providedIn: 'root',
})
export class AuthStateService {
    private httpClient = inject(HttpClient)
    private router = inject(Router)
    private localStorageService = inject(LocalStorageService)
    private authApiUrl = environment.authUrl
    
    // State
    private state = signal<AuthModel>(this.localStorageService.getStorage('auth') ?? INITIAL_STATE)

    // Selectors
    isAuthenticated = computed(() => !!this.state().token)
    token = computed(() => this.state().token)
    display = computed(() => this.state().display)

    // Effects
    effecAuthtState = effect(() => this.localStorageService.setStorage('auth', this.state()))

    // Actions/Reducers
    setAuth(payload: AuthModel) {
        this.state.set(payload)
    }

    login(email: string, password: string) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('charset', 'utf8')
        const body = JSON.stringify({ email, password })
        this.httpClient.post<AuthResponse>(`${this.authApiUrl}/sign-in`, body, { headers }).subscribe({
            next: ({data}: AuthResponse) => {
                if (data && data.token) {
                    const auth: AuthModel = {
                        display: data.display,
                        email: data.email,
                        expirationDate: new Date(data.expirationDate),
                        id: data.id,
                        isValid: data.isValid,
                        pictureUrl: data.pictureUrl,
                        refreshToken: data.refreshToken,
                        roleId: data.roleId,
                        token: data.token,
                        userId: data.userId,
                        userName: data.userName,
                    }

                    this.setAuth(auth)
                    this.router.navigate(['home'])
                }
            },
            error: (error) => {
                //Mostrar toast con mensaje de error p/ credenciales invalidas
                console.log(error)
            },
        })
    }

    refreshToken(): Observable<AuthModel> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('charset', 'utf8')

        const body = JSON.stringify({
            display: this.state().display,
            expirationDate: this.state().expirationDate,
            id: this.state().id,
            refreshToken: this.state().refreshToken,
            token: this.state().token,
        })
        return this.httpClient.post<AuthResponse>(`${this.authApiUrl}/refresh`, body, { headers }).pipe(
            map(({ data }: AuthResponse) => {
                
                const refreshedAuth: AuthModel = {
                    display: data.display,
                    email: data.email,
                    expirationDate: new Date(data.expirationDate),
                    id: data.id,
                    isValid: data.isValid,
                    pictureUrl: data.pictureUrl,
                    refreshToken: data.refreshToken,
                    roleId: data.roleId,
                    token: data.token,
                    userId: data.userId,
                    userName: data.userName,
                }

                return refreshedAuth
            })
        )
    }

    logout() {
        this.state.set(INITIAL_STATE)
        this.localStorageService.clearStorage()
        this.router.navigate(['auth/login'])
    }
}
