import React from 'react'
import ActionButton from './ActionButton';

interface ActionProps {
    values: object
    actions: string[]
    type: string
}

function ActionButtons ({values, actions, type}: ActionProps): JSX.Element {
    function getButtons (): JSX.Element[] {
        return actions.map((action, key) => {
            return (
                <ActionButton
                    values={values}
                    action={action}
                    key={key}
                    type={type}
                />
            )
        })
    }

    return (
        <div>
            {getButtons()}
        </div>
    )
}

export default ActionButtons
