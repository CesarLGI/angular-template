import { Component, inject, OnInit } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { DialogService } from 'primeng/dynamicdialog'

import { CrudTable } from '@core/models/classes/crud-table.class'
import { UsersService } from '@shared/services/users.service'
import { UserModel } from '@shared/models/interfaces/user.interface'
import { UserTestModalComponent } from '../components/user-test-modal/user-test-modal.component'
import { UserModalComponent } from '../components/user-modal/user-modal.component'

@Component({
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './users.component.html',
})
export class UsersComponent extends CrudTable<UserModel> implements OnInit {
    api = inject(UsersService)
    protected override modalComponent = UserModalComponent
    override entityName: string = 'User'

    dataTest: UserModel = {
        email: 'user@gmail.com',
        firstName: 'Alan',
        lastName: 'Buscaglia',
        picture: undefined,
        pictureId: undefined,
        roleId: 2,
        userId: 2,
    }

    ngOnInit() {
        this.getRecords()
    }

    openUserTestModal(data: any) {
        this.ref = this.dialogService.open(UserTestModalComponent, {
            header: 'User Test',
            data: {
                dataModal: data,
            },
        })
    }
}
