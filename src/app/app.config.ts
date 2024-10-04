import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter, TitleStrategy, withComponentInputBinding, withRouterConfig, withViewTransitions } from '@angular/router'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { provideSpinnerConfig } from 'ngx-spinner'

import routesConfig from './app.routes'
import { authInterceptor } from '@core/interceptors/auth.interceptor'
import { spinnerInterceptor } from '@core/interceptors/spinner.interceptor'
import { TemplatePageTitleStrategy } from '@core/services/template-page-title-strategy.service'

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideSpinnerConfig({ type: 'ball-clip-rotate' }),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routesConfig, withRouterConfig({ paramsInheritanceStrategy: 'always' }), withComponentInputBinding(), withViewTransitions()),
        provideHttpClient(withInterceptors([authInterceptor, spinnerInterceptor])),
        { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    ],
}
