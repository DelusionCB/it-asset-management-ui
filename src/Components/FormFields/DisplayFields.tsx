import React from 'react';
import {Container, Row} from 'reactstrap';
import {
    extendedApplicationDataProps, extendedDirectoryDataProps,
    LicenseDataProps,
} from '../../Types/types.directories';

interface appProps {
    type: 'application'
    item: extendedApplicationDataProps
}

interface dirProps {
    type: 'directory'
    item: extendedDirectoryDataProps
}

interface lcnProps {
    type: 'license'
    item: LicenseDataProps
}

type combinedProps = appProps | dirProps | lcnProps

function DisplayFields ({type, item}: combinedProps): JSX.Element {
    console.log(item, type, 'item')

    function getFields (): JSX.Element {
        switch (type) {
            case 'application':
                return (
                    <Container className='directoryItem-page'>
                        <Row>
                            <h1>Sovellus</h1>
                        </Row>
                        <Row>
                            <hr />
                            <h2>Sovelluksen kuvaus</h2>
                            <hr />
                        </Row>
                        <Row>
                            <h3>Nimi:</h3>
                            <p>{item.name}</p>
                        </Row>
                        <Row>
                            <h3>Kuvaus:</h3>
                            <p>{item.description}</p>
                        </Row>
                        <Row>
                            <h3>Luokittelu:</h3>
                            <p>{item.classification}</p>
                        </Row>
                        <Row>
                            <h3>Asiakkuus:</h3>
                            <p>{item.place_of_use}</p>
                        </Row>
                        <Row>
                            <h3>Sisältääkö järjestelmä henkilörekisterin:</h3>
                            <p>{item.person_register ? 'Kyllä' : 'Ei'}</p>
                        </Row>
                        <Row>
                            <h3>Henkilötietojen katselun lokitus:</h3>
                            <p>{item.personal_info_logging ? 'Kyllä' : 'Ei'}</p>
                        </Row>
                        <Row>
                            <h3>Asennuksen lisätiedot:</h3>
                            <p>{item.install_info}</p>
                        </Row>
                        <Row>
                            <h3>Avainsanat:</h3>
                            <p>{item.keywords}</p>
                        </Row>
                        <Row>
                            <hr />
                            <h2>Sovelluksen sidokset</h2>
                            <hr />
                        </Row>
                        <Row>
                            <h3>Asennettu palvelimelle:</h3>
                            {item.installed_server
                                ? <>
                                    <p>{item.installed_server.name}</p>
                                </>
                                : <>
                                    <p>Ei asennettu</p>
                                </>
                            }
                        </Row>
                        <Row>
                            <h3>Liittyy palveluihin:</h3>
                            {item.service_dependency
                                ? item.service_dependency.map((child, key) => (
                                    <div key={key}>
                                        <Row>
                                            <h4>Nimi {key + 1}:</h4>
                                            <p>{child.name}</p>
                                        </Row>
                                        <Row>
                                            <h4>Kuvaus {key + 1}:</h4>
                                            <p>{child.description}</p>
                                        </Row>
                                    </div>
                                ))
                                : <>
                                    <h4>Ei palvelukytköksiä</h4>
                                </>
                            }
                        </Row>
                        <Row>
                            <h3>Integraatiot:</h3>
                            {item.integration
                                ? item.integration.map((child, key) => (
                                    <div key={key}>
                                        <Row>
                                            <h4>Nimi {key + 1}:</h4>
                                            <p>{child.name}</p>
                                        </Row>
                                        <Row>
                                            <h4>Kuvaus {key + 1}:</h4>
                                            <p>{child.description}</p>
                                        </Row>
                                    </div>
                                ))
                                : <>
                                    <h4>Ei integraatioita</h4>
                                </>
                            }
                        </Row>
                        <Row>
                            <h3>Lisensointi:</h3>
                            {item.license
                                ? <>
                                    <p>{item.license.name}</p>
                                    <p>{item.license.valid_from_date}</p> - <p>{item.license.valid_until_date}</p>
                                </>
                                : <>
                                    <p>Ei lisenssiä</p>
                                </>
                            }
                        </Row>
                        <Row>
                            <h3>Riippuvaisuudet sovelluksiin / sovelluksista:</h3>
                            {item.application_dependency
                                ? <>
                                    <p>{item.application_dependency.name}</p>
                                </>
                                : <>
                                    <p>Ei riippuvaisuuksia</p>
                                </>
                            }
                        </Row>
                        <Row>
                            <hr />
                            <h2>Jatkuvuus, kriittisyys & palautumistiedot</h2>
                            <hr />
                        </Row>
                        <Row>
                            <h3>Päivitykset:</h3>
                            <p>{item.update_practice}</p>
                        </Row>
                        <Row>
                            <h3>Varmistuskäytännöt & valvonta:</h3>
                            <p>{item.security_practice_monitoring}</p>
                        </Row>
                        <Row>
                            <h3>Palautuskäytännöt & toipuminen:</h3>
                            <p>{item.recovery_practices_convalescence}</p>
                        </Row>
                        <Row>
                            <h3>Käyttöoikeuksien hallinta:</h3>
                            <p>{item.user_rights_management}</p>
                        </Row>
                        <Row>
                            <h3>Tietoturvaratkaisut:</h3>
                            <p>{item.security_solutions}</p>
                        </Row>
                        <Row>
                            <hr />
                            <h2>Vastuut</h2>
                            <hr />
                        </Row>
                        <Row>
                            <h3>Sovelluksen omistaja:</h3>
                            <p>{item.product_owner}</p>
                        </Row>
                        <Row>
                            <h3>Sovelluksen haltija tai muu ensisijainen vastuuhenkilö:</h3>
                            <p>{item.application_holder}</p>
                        </Row>
                        <Row>
                            <h3>Pääkäyttäjät (Tekniset pääkäyttäjät):</h3>
                            <p>{item.admin_users}</p>
                        </Row>
                        <Row>
                            <h3>Vastuu & ammattikäyttäjät (Toiminnalliset pääkäyttäjät, tai esim. Pegasos vastuukäyttäjät):</h3>
                            <p>{item.liability_professional_users}</p>
                        </Row>
                        <Row>
                            <h3>Lisätietoja vastuuhenkilöistä:</h3>
                            <p>{item.holder_extra_info}</p>
                        </Row>
                        <Row>
                            <h3>Käyttöoikeusvastaavat:</h3>
                            <p></p>
                        </Row>
                        <Row>
                            <h3>Toimittaja:</h3>
                            <p>{item.provider}</p>
                        </Row>
                        <Row>
                            <h3>Toimittajan vastuut:</h3>
                            <p>{item.provider_responsibility}</p>
                        </Row>
                        <Row>
                            <h3>Lisäkontaktit:</h3>
                            <p>{item.additional_contacts}</p>
                        </Row>
                        <Row>
                            <hr />
                            <h2>Lisätiedot & linkit</h2>
                            <hr />
                        </Row>
                        <Row>
                            <h3>Lisätietoja:</h3>
                            <p>{item.known_issues}</p>
                        </Row>
                        <Row>
                            <h3>Linkit & dokumentit:</h3>
                            <a>{item.fileUrl}</a>
                        </Row>
                    </Container>
                )
            case 'directory':
                return (
                    <Container>
                        <Row>
                            <h1>Kansio</h1>
                        </Row>
                        <Row>
                            <hr />
                            <h2>Kansion kuvaus</h2>
                            <hr />
                        </Row>
                        <Row>
                            <h3>Nimi:</h3>
                            <p>{item.name}</p>
                        </Row>
                        <Row>
                            <h3>Kuvaus:</h3>
                            <p>{item.description}</p>
                        </Row>
                        <Row>
                            <h3>Sovellukset:</h3>
                            {item.applications.length
                                ? item.applications.map((child, key) => (
                                    <div key={key}>
                                        <Row>
                                            <h4>Nimi {key + 1}:</h4>
                                            <p>{child.name}</p>
                                        </Row>
                                        <Row>
                                            <h4>Kuvaus {key + 1}:</h4>
                                            <p>{child.description}</p>
                                        </Row>
                                    </div>
                                ))
                                : <>
                                    <h4>Ei sovelluksia</h4>
                                </>
                            }
                        </Row>
                        <Row>
                            <h3>Palvelut:</h3>
                            {item.services.length
                                ? item.services.map((child, key) => (
                                    <div key={key}>
                                        <Row>
                                            <h4>Nimi {key + 1}:</h4>
                                            <p>{child.name}</p>
                                        </Row>
                                        <Row>
                                            <h4>Kuvaus {key + 1}:</h4>
                                            <p>{child.description}</p>
                                        </Row>
                                    </div>
                                ))
                                : <>
                                    <h4>Ei sovelluksia</h4>
                                </>
                            }
                        </Row>
                        <Row>
                            <h3>Palvelimet:</h3>
                            {item.servers.length
                                ? item.servers.map((child, key) => (
                                    <div key={key}>
                                        <Row>
                                            <h4>Nimi {key + 1}:</h4>
                                            <p>{child.name}</p>
                                        </Row>
                                        <Row>
                                            <h4>Kuvaus {key + 1}:</h4>
                                            <p>{child.description}</p>
                                        </Row>
                                    </div>
                                ))
                                : <>
                                    <h4>Ei sovelluksia</h4>
                                </>
                            }
                        </Row>
                    </Container>
                )
            case 'license':
                return (
                    <Container>
                        <Row>
                            <h1>Lisenssi</h1>
                        </Row>
                        <Row>
                            <hr />
                            <h2>Lisenssin kuvaus</h2>
                            <hr />
                        </Row>
                        <Row>
                            <h3>Nimi:</h3>
                            <p>{item.name}</p>
                        </Row>
                        <Row>
                            <h3>Kuvaus:</h3>
                            <p>{item.description}</p>
                        </Row>
                        <Row>
                            <h3>Voimassa alkaen:</h3>
                            <p>{item.valid_from_date}</p>
                        </Row>
                        <Row>
                            <h3>Voimassa päättyen:</h3>
                            <p>{item.valid_until_date}</p>
                        </Row>
                        <Row>
                            <h3>Lisenssityyppi:</h3>
                            <p>{item.license_type}</p>
                        </Row>
                        <Row>
                            <h3>Sopimus:</h3>
                            <p>{item.contract}</p>
                        </Row>
                        <Row>
                            <h3>Dokumentit:</h3>
                            <p>{item.fileUrl}</p>
                        </Row>
                    </Container>
                )
        }
    }
    return (
        <div>
            {getFields()}
        </div>
    );
}

export default DisplayFields;
