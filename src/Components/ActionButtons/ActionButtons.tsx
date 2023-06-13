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
                disabled={isDisabled}
            />
        )
    }

    const editButton = getButtons('edit', false)
    const createButton = getButtons('create', false)
    const cancelButton = getButtons('cancel', false)
    const saveButton = getButtons('save', false)
    const copyButton = getButtons('copy', false)
    const deleteButton = getButtons('delete', false)

    return (
        <div className='action-buttons'>
            {mode === 'display' && copyButton}
            {mode !== 'display' && cancelButton}
            {(mode === 'create' || mode === 'copy') && createButton}
            {mode === 'display' && deleteButton}
            {mode === 'display' && editButton}
            {mode === 'edit' && saveButton}
        </div>
    )
}

export default ActionButtons
