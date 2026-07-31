import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const CONTACT_EMAIL = 'miles.d.au@gmail.com';
const REQUEST_SUBJECT = 'SwiftyIndie — Data Deletion Request';

function MetaDataDeletion() {
    useEffect(() => {
        document.title = 'Meta / Facebook Data Deletion | SwiftyIndie';
    }, []);

    return (
        <div className="legal-page legal-page--meta-data-deletion container">
            <section className="legal-page__hero">
                <p className="legal-page__eyebrow">SwiftyIndie</p>
                <h1>Meta / Facebook Data Deletion</h1>
                <p className="legal-page__intro">
                    How to request deletion of information related to our apps in connection with Meta (Facebook) services.
                </p>
            </section>

            <section className="legal-page__content legal-page__content--secondary">
                <p>
                    Some apps published through SwiftyIndie may use Meta (Facebook) software development kit (SDK) services for analytics and advertising measurement, as described in our Privacy Policy.
                </p>
                <p>
                    Those apps do not offer sign-in with Facebook or other Facebook-based user accounts. We do not store Facebook profile information on our own servers.
                </p>
                <p>
                    If you would like to request deletion of any app-controlled data associated with your use of one of our apps, where applicable, please email{' '}
                    <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(REQUEST_SUBJECT)}`}>{CONTACT_EMAIL}</a>
                    {' '}with the subject line “{REQUEST_SUBJECT}” and include the name of the app your request relates to.
                </p>
                <p>
                    Information processed directly by Meta may need to be reviewed or managed separately through your Meta or Facebook account settings and tools Meta provides, in addition to any request you send to us.
                </p>
                <p>
                    For general privacy practices across SwiftyIndie apps, see the{' '}
                    <Link to={ROUTES.STANDARD_PRIVACY_POLICY}>Privacy Policy</Link>.
                </p>
            </section>
        </div>
    );
}

export default MetaDataDeletion;
