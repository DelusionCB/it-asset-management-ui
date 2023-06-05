
// eslint-disable-next-line import/named
import {TFunction} from 'i18next';

// ItemGrid & Item

interface objectItem {
    name: string
    description: string
    id_prefix: string
    base_id: string
}

export interface itemPropTypes {
    itemKey: number
    item: objectItem
    t: TFunction
}

export interface gridPropTypes {
    items: objectItem[]
    t: TFunction
}

// Searchbar

export interface searchBarPropTypes {
    onFormSubmit: (searchQuery: string, contextType: string, fetch: boolean) => void
    t: TFunction
}

// ActionButton & ActionButtons

export interface actionButtonPropTypes {
    values: any
    action: string
    type: string
    disabled: boolean
}

export interface ActionPropTypes {
    values: any
    type: string
    mode: string
}

export interface ConfirmationModalPropTypes {
    onConfirm: () => void
    onCancel: () => void
    t: TFunction
    values: any
    type: string
}
