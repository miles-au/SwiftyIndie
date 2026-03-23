import React from 'react';

function PrivacyPolicy() {
    return (
        <div className="legal-page legal-page--privacy container">
            <section className="legal-page__hero">
                <p className="legal-page__eyebrow">SwiftyIndie</p>
                <h1>Privacy Policy</h1>
                <p className="legal-page__intro">
                    A plain-English summary of how data is handled across apps published by Kyle Au through SwiftyIndie.
                </p>
            </section>

            <section className="legal-page__content">
                <p>This Privacy Policy applies to mobile applications and related services published by Kyle Au through SwiftyIndie, unless a specific app includes its own separate privacy policy.</p>
                <p>We try to collect as little information as possible. Most apps do not require you to create an account, and we do not intentionally collect information that directly identifies you, such as your name, mailing address, or government-issued identifiers, unless you choose to contact us directly.</p>
                <p>Some apps use TelemetryDeck or similar privacy-focused analytics tools to collect anonymized or aggregated diagnostic and usage information. This may include events such as app opens, feature usage, app version, device type, operating system version, country or region derived from your network connection, and crash or performance information. We use this information to understand how our apps are used, fix bugs, improve stability, and guide product decisions.</p>
                <p>We do not use analytics data to personally identify you, and we do not sell your personal information.</p>
                <p>If you email us for support or feedback, we will receive the information you choose to include in your message, such as your email address and the contents of your request. We use that information only to respond to you and manage the conversation.</p>
                <p>Some apps may store data locally on your device, such as preferences, settings, saved items, or app state. That data is generally controlled by you and remains on your device unless a feature clearly tells you otherwise.</p>
                <p>We may rely on third-party service providers to help operate our apps, such as analytics, crash reporting, hosting, or app distribution platforms. Those providers may process limited technical data on our behalf in accordance with their own terms and privacy policies. For example, TelemetryDeck&apos;s privacy policy is available at <a href="https://telemetrydeck.com/privacy">https://telemetrydeck.com/privacy</a>.</p>
                <p>We keep information only for as long as reasonably necessary for the purposes described in this policy, including maintaining the app, improving performance, complying with legal obligations, and resolving disputes.</p>
                <p>You can stop all collection by uninstalling the app. If you contact us and want us to delete information you previously sent directly, you can email us at <a href="mailto:miles.d.au@gmail.com">miles.d.au@gmail.com</a>.</p>
                <p>Our apps are not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us personal information, please contact us so we can review and delete it if appropriate.</p>
                <p>We may update this Privacy Policy from time to time. When we do, we will post the updated version on this page. Your continued use of an app after an update becomes effective means you accept the revised policy.</p>
                <p className="legal-page__effective-date">Effective date: March 24, 2026.</p>
            </section>

        </div>
    );
}

export default PrivacyPolicy;
