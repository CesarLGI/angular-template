import { computed, Injectable, signal } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class SplashService {
    private splash = signal(true)
    isVisible = computed(() => this.splash())

    setSplash() {
        this.splash.update((value) => !value)
    }
}
