import { Component, inject, OnInit } from '@angular/core'
import { JsonPipe } from '@angular/common'
import { ButtonModule } from 'primeng/button'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

import { CrudModal } from '@core/models/classes/crud-modal.class'
import { UsersService } from '@shared/services/users.service'
import { UserModel } from '@shared/models/interfaces/user.interface'

@Component({
    standalone: true,
    imports: [ButtonModule, JsonPipe, ReactiveFormsModule],
    templateUrl: './user-modal.component.html',
})
export class UserModalComponent extends CrudModal<UserModel> {
    api = inject(UsersService)

    formGroup = new FormGroup({
        userId: new FormControl(this.data?.userId || null),
        firstName: new FormControl(this.data?.firstName || '', Validators.required),
        lastName: new FormControl(this.data?.lastName || '', Validators.required),
        email: new FormControl(this.data?.email || '', Validators.required),
        roleId: new FormControl(this.data?.roleId || '', Validators.required),
        // picture: new FormControl(this.data?.picture || null),
        // password: new FormControl(null),
        // pictureId: new FormControl(this.data.pictureId || null),
    })
}
