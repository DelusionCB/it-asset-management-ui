
// eslint-disable-next-line import/named
import {NavigateFunction} from 'react-router-dom';
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
    key: number
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
    values: object
    action: string
    type: string
}

export interface ActionPropTypes {
    values: object
    actions: string[]
    type: string
}
