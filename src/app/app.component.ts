import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NgxSpinnerModule } from 'ngx-spinner'
import { ConfirmationService, MessageService } from 'primeng/api'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { DialogService } from 'primeng/dynamicdialog'
import { ToastModule } from 'primeng/toast'
import { SplashComponent } from './shared/components/other/splash/splash.component'
import { SplashService } from '@shared/services/splash.service'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NgxSpinnerModule, ToastModule, ConfirmDialogModule, SplashComponent],
    providers: [DialogService, MessageService, ConfirmationService],
    templateUrl: './app.component.html',
})
export class AppComponent {
    protected splashService = inject(SplashService)
}
