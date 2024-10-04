import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'

@Component({
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './user-test-modal.component.html',
})
export class UserTestModalComponent {
    // api = inject(UsersApiService)
    // entityId = this.config.data.id
}
