import { FilterCriterion } from './filter-criterion.interface'
import { SortCriterion } from './sort-criterion.interface'

export interface QueryCriteria {
    filters: FilterCriterion[]
    search?: string
    sorts: SortCriterion[]
}
