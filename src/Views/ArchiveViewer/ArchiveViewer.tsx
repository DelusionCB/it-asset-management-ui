import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {getItemData} from '../../Api/Utils/fetchUtils';
import DisplayFields from '../../Components/FormFields/DisplayFields';
import {Spinner} from 'reactstrap';
import Back from '../../Components/CustomComponents/BackButton';
import './index.scss'

function ArchiveViewer (): JSX.Element {
    const params = useLocation();
    const directParams = useParams();
    const [item, setItem] = useState<any>({});
    const [loading, isLoading] = useState(true);
    const [apiPath, setApiPath] = useState('nopath');

    const setData = (): void => {
        setItem({})
        isLoading(true)
        if (!params.state) {
            void getItemData({itemId: directParams.id, apiPath: directParams.path}).then((res) => {
                setItem(res)
            }).finally(() => {
                isLoading(false);
            });
        } else {
            void getItemData({itemId: params.state.id, apiPath: params.state.api}).then((res) => {
                setItem(res)
            }).finally(() => {
                isLoading(false);
            });
        }
        setApiPath(params.state ? params.state.api : directParams.path)
    }

    useEffect(() => {
        setData();
    }, [params, directParams]);

    if (loading) {
        return (
            <Spinner animation="border" role="status">
                Ladataan...
            </Spinner>
        );
    } else {
        return (
            <div className='formviewer'>
                <Back />
                <DisplayFields
                    loading={loading}
                    item={item}
                    type={apiPath}
                />
            </div>
        );
    }
}

export default ArchiveViewer;
