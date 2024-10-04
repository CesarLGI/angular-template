import { Component, inject, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ButtonModule } from 'primeng/button'

import { QueryCriteria } from '@core/models/interfaces/query-criteria.interface'
import { SortCriterion } from '@core/models/interfaces/sort-criterion.interface'
import { UsersService } from '@shared/services/users.service'
import { AuthStateService } from '@shared/state/auth-state.service'

@Component({
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    authStateService = inject(AuthStateService)
    usersService = inject(UsersService)
    router = inject(Router)

    logout() {
        this.authStateService.logout()
    }

    ngOnInit() {
        //this.refresh()
    }

    refresh() {
        const query: QueryCriteria = {
            sorts: [],
            filters: [],
            search: '',
        }

        const sortName: SortCriterion = {
            propertyName: 'name',
            descending: true,
        }

        // const filterUser: FilterCriterion = {
        //     propertyName: 'userId',
        //     type: FilterTypesEnum.Equals,
        //     value: 1,
        // }

        // const filterName: FilterCriterion = {
        //     propertyName: 'name',
        //     type: FilterTypesEnum.Equals,
        //     value: 'Club',
        // }

        query.sorts.push(sortName)
        // query.filters.push(filterUser)
        // query.filters.push(filterName)

        this.usersService.getPaginatedList({ query: btoa(JSON.stringify(query)) }).subscribe((response) => {
            this.router.navigate([], {
                queryParams: { start: 0, length: 0 },
                queryParamsHandling: 'merge',
            })
        })
        this.usersService.getById(1).subscribe((response) => console.log(response))
    }
}
