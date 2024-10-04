export interface FilterCriterion {
    and?: FilterCriterion[]
    from?: string
    or?: FilterCriterion[]
    propertyName: string
    to?: string
    type: string
    value: number | string
}
