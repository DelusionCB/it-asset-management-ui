import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './index.scss'
import {ConfirmationModalPropTypes} from '../../Types/types.components';

function ConfirmationModal ({onConfirm, onCancel, values, t, type}: ConfirmationModalPropTypes): JSX.Element {
    return (
        <Modal centered={true} className='confirmation-modal' isOpen={true} toggle={onCancel}>
            <ModalHeader className='-header' tag='h1'>{t('modal.header')}</ModalHeader>
            <ModalBody className='-body'>
                <div>
                    <div>
                        {t(`modal.body.${type}`, {value: values.name})}
                    </div>
                </div>
            </ModalBody>
            <ModalFooter className='-footer'>
                <Button className='-do' onClick={onConfirm}>
                    {t('modal.doAction')}
                </Button>
                <Button className='-cancel' onClick={onCancel}>
                    {t('modal.cancelAction')}
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default ConfirmationModal;
