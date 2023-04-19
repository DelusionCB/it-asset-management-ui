import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {getItemData} from '../../Api/Utils/fetchUtils';
import DisplayFields from '../../Components/FormFields/DisplayFields';
import {Spinner} from 'reactstrap';

function FormViewer (): JSX.Element {
    const params = useLocation();
    const directParams = useParams();
    const [item, setItem] = useState<any>()
    const [loading, isLoading] = useState(true)

    const setData = (): void => {
        if (!params.state) {
            void getItemData({itemId: directParams.id, apiPath: directParams.path}).then((res) => {
                setItem(res)
                isLoading(false)
            })
        } else {
            void getItemData({itemId: params.state.id, apiPath: params.state.api}).then((res) => {
                setItem(res)
                isLoading(false)
            })
        }
    }

    useEffect(() => {
        setData()
    }, [])

    if (loading) {
        return (
            <Spinner animation="border" role="status">
                Ladataan...
            </Spinner>
        )
    } else {
        return (
            <div>
                <DisplayFields
                    item={item}
                    type={params.state ? params.state.api : directParams.path}
                />
            </div>
        )
    }
}

export default FormViewer;
