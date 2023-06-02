import React from 'react'
import ActionButton from './ActionButton';
import {ActionPropTypes} from '../../Types/types.components';
import './index.scss'

function ActionButtons ({values, type, mode}: ActionPropTypes): JSX.Element {
    function getButtons (action: string, isDisabled: boolean): JSX.Element {
        return (
            <ActionButton
                values={values}
                action={action}
                type={type}
                mode={mode}
                disabled={isDisabled}
            />
        )
    }

    const editButton = getButtons('edit', false)
    const createButton = getButtons('create', false)
    const cancelButton = getButtons('cancel', false)
    const saveButton = getButtons('save', false)
    const copyButton = getButtons('copy', true)

    return (
        <div className='action-buttons'>
            {mode === 'display' && copyButton}
            {mode !== 'display' && cancelButton}
            {mode === 'create' && createButton}
            {mode === 'display' && editButton}
            {mode === 'edit' && saveButton}
        </div>
    )
}

export default ActionButtons
