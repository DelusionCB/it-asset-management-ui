import React, {useEffect, useState} from 'react';
import {Button, Container, Form, Row} from 'reactstrap';
import ArchiveSelection from '../../Components/CustomComponents/ArchiveSelection';
import TextField from '../CustomComponents/TextField';
import {searchBarPropTypes} from '../../Types/types.components';

function Searchbar ({onFormSubmit, t}: searchBarPropTypes): JSX.Element {
    const [fieldType, setFieldType] = useState('application')
    const [searchQuery, setSearchQuery] = useState('')

    function handleSubmit (event: any): void {
        event.preventDefault();
        onFormSubmit(searchQuery, fieldType, true);
    }

    useEffect(() => {
        setSearchQuery('')
        onFormSubmit(searchQuery, fieldType, false)
    }, [fieldType])

    return (
        <Container>
            <h1>{t('search-header')}</h1>
            <Row>
                <ArchiveSelection
                    onChange={(e) => { setFieldType(e); }}
                    selections={['application', 'directory', 'license', 'server', 'service', 'provider', 'contract']}
                    disabled={false}
                    label='select-archive-search'
                />
            </Row>
            <Row>
                <div className='search-bar'>
                    <Form onSubmit={handleSubmit}>
                        <TextField
                            label='archive-contents'
                            onChange={(e) => { setSearchQuery(e.target.value); }}
                            type='text'
                            id='search'
                            placeholder='archive-example'
                            disabled={false}
                            invalid={false}
                            value={searchQuery}
                        />
                    </Form>
                    <Button
                        disabled={searchQuery.length < 3}
                        onClick={() => { onFormSubmit(searchQuery, fieldType, true); }}>
                        <span>{t('archive-fetch')}</span>
                    </Button>
                </div>
            </Row>
        </Container>
    );
}

export default Searchbar;
