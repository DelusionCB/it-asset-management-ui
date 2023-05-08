import React, {useState} from 'react';
import {Container, Spinner} from 'reactstrap';
import Searchbar from '../../Components/Searchbar/Searchbar';
import {useTranslation} from 'react-i18next';
import {getEndpointData} from '../../Api/Utils/fetchUtils';
import ItemGrid from '../../Components/ItemGrid/ItemGrid';
import './index.scss'

function Search (): JSX.Element {
    const [results, setResults] = useState([])
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const {t} = useTranslation()

    async function executeSearch (query: string, type: string, fetch: boolean): Promise<void> {
        if (!fetch) {
            setResults([])
        } else {
            setLoading(true)
            try {
                const response = await getEndpointData({endpoint: type, filter: query})
                setResults(response.results)
                setCompleted(true)
            } finally {
                setLoading(false)
            }
        }
    }

    function getResults (): JSX.Element | null {
        return completed && results.length < 0
            ? null
            : <ItemGrid t={t} items={results} />
    }

    return (
        <Container className='search-page'>
            <Searchbar
                onFormSubmit={(query, type, fetch) => { void executeSearch(query, type, fetch) }}
                t={t}
            />
            <div>
                <div className="results-count-status" role="status" aria-live="polite" aria-atomic="true">
                    {completed &&
                        <p>{t('search-results', {count: results.length})}</p>
                    }
                </div>
                <section className="container-fluid">
                    {loading
                        ? <div className="search-loading-spinner">
                            <Spinner animation="border" role="status">
                                Ladataan...
                            </Spinner>
                        </div>
                        : getResults()
                    }
                </section>
            </div>
        </Container>
    );
}

export default Search;
