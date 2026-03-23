import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './Home.scss';

const apps = [
    {
        name: 'Klothes',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/10/40/25/10402505-3649-24d1-e405-8eee3ace1253/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg',
        href: 'https://apps.apple.com/us/app/measure-sell-clothes-klothes/id1514959523?uo=4'
    },
    {
        name: 'Outfits',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b3/47/90/b3479015-4734-06ce-b0bb-7c1f086cc679/AppIcon-1x_U007emarketing-0-11-0-85-220-0.png/512x512bb.jpg',
        href: 'https://apps.apple.com/us/app/outfits-travel-clothing-plans/id6467569577?uo=4'
    },
    {
        name: 'Exchange Lens',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/29/7e/58/297e582b-a068-db63-0be8-465c6377df1a/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg',
        href: 'https://apps.apple.com/us/app/currency-camera-exchange-lens/id1494835186?uo=4'
    },
    {
        name: 'TimeSquares',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/15/43/69/15436997-767c-4d57-4825-c22f355eb094/AppIcon-1x_U007emarketing-0-10-0-85-220-0.png/512x512bb.jpg',
        href: 'https://apps.apple.com/us/app/timesquares/id6740178646?uo=4'
    },
    {
        name: 'BeforeYouGo',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/12/10/01/12100162-f250-2561-dcc0-091a2d00da6a/AppIcon-0-1x_U007emarketing-0-10-0-85-220-0.png/512x512bb.jpg',
        href: 'https://apps.apple.com/us/app/routine-photos-beforeyougo/id6451154315?uo=4'
    },
    {
        name: 'BaddyBuddy',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e1/df/71/e1df71c4-81d9-0a44-33fe-5ec5fde39ca9/AppIcon-1x_U007emarketing-0-6-0-85-220-0.png/512x512bb.jpg',
        href: 'https://apps.apple.com/us/app/selfies-made-easy-baddybuddy/id6633440308?uo=4'
    }
];

const HomePage = () => (
    <div className="home-page">
        <section className="home-hero">
            <div className="home-hero__copy">
                <p className="home-hero__eyebrow">Independent iOS Apps</p>
                <h1>Useful little apps for real life.</h1>
                <p className="home-hero__lede">
                    SwiftyIndie is a collection of travel, resale, photo, utility, and lifestyle apps. Browse the App Store links below or jump straight to the shared legal pages.
                </p>

                <div className="home-hero__actions">
                    <a className="home-button home-button--primary" href="https://apps.apple.com/de/developer/kyle-au/id1692032183?l=en-GB" target="_blank" rel="noreferrer">
                        View Developer Page
                    </a>
                    <Link className="home-button home-button--secondary" to={ROUTES.STANDARD_PRIVACY_POLICY}>
                        Privacy Policy
                    </Link>
                    <Link className="home-button home-button--secondary" to={ROUTES.STANDARD_TERMS}>
                        Terms
                    </Link>
                </div>
            </div>
        </section>

        <section className="app-grid-section">
            <div className="section-heading">
                <p className="section-heading__eyebrow">Portfolio</p>
                <h2>Live on the App Store</h2>
            </div>

            <div className="app-grid">
                {apps.map((app) => (
                    <div className="app-card" key={app.name}>
                        <img className="app-card__icon" src={app.icon} alt={`${app.name} app icon`} />
                        <h3>{app.name}</h3>
                        <a className="app-card__cta" href={app.href} target="_blank" rel="noreferrer">
                            View on the App Store
                        </a>
                    </div>
                ))}
            </div>
        </section>

        <section className="home-footer-card">
            <div>
                <p className="section-heading__eyebrow">Housekeeping</p>
                <h2>Shared legal pages for all apps</h2>
                <p>
                    These links are the canonical legal pages you can reuse across your product portfolio.
                </p>
            </div>

            <div className="home-footer-card__links">
                <Link to={ROUTES.STANDARD_PRIVACY_POLICY}>Privacy Policy</Link>
                <Link to={ROUTES.STANDARD_TERMS}>Terms and Conditions</Link>
            </div>
        </section>
    </div>
);

export default HomePage;
