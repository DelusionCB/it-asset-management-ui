import React from 'react'
import ActionButton from './ActionButton';
import {ActionPropTypes} from '../../Types/types.components';

function ActionButtons ({values, actions, type}: ActionPropTypes): JSX.Element {
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
