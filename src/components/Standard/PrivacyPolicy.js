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
                <p>On iOS, some apps integrate the Meta (Facebook) software development kit to measure app installs and the effectiveness of advertising on Meta technologies, including Instagram and Facebook. This helps us see whether people who interact with our ads go on to install or use the app. We do not use Apple’s Identifier for Advertisers (IDFA) with Meta’s services, and we do not access IDFA for this advertising or measurement integration. Depending on your device and settings, measurement may rely on privacy-preserving techniques supported by Apple and Meta (for example, SKAdNetwork). Meta may still receive limited technical data and in-app events as described in its documentation. These IDFA and SKAdNetwork details are specific to iOS; on Android, these apps do not include the Meta SDK. Meta&apos;s privacy policy is available at <a href="https://www.facebook.com/privacy/policy">https://www.facebook.com/privacy/policy</a>.</p>
                <p>Some apps also use RevenueCat to manage in-app purchases, subscriptions, and entitlements. When RevenueCat is used, RevenueCat may process purchase history, subscription status, entitlement information, and an app user identifier. If an app does not provide its own signed-in user identifier, RevenueCat may generate an anonymous app user ID to help manage purchases across sessions and devices. We use this information to validate purchases, unlock paid features, restore purchases, and provide customer support related to subscriptions.</p>
                <p>If we send customer attributes or identifiers to RevenueCat or related services, those may include information such as an internal user ID, email address, or other data you choose to provide, but only where needed for account, purchase, support, or subscription functionality.</p>
                <p>We do not use analytics data to personally identify you, and we do not sell your personal information.</p>
                <p>If you email us for support or feedback, we will receive the information you choose to include in your message, such as your email address and the contents of your request. We use that information only to respond to you and manage the conversation.</p>
                <p>Some apps may store data locally on your device, such as preferences, settings, saved items, or app state. That data is generally controlled by you and remains on your device unless a feature clearly tells you otherwise.</p>
                <p>Some apps use the Google Places API to provide location- and place-related features, such as searching for places, showing nearby results, or autocompleting addresses. To power those features, this may involve processing approximate or precise location and place data. That data is used only to provide the location- and place-related features you request. Google&apos;s privacy policy is available at <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>.</p>
                <p>Some apps access the camera and process images on your device, for example to perform background or subject segmentation using on-device machine learning. This processing happens on the device, and your images are not uploaded to us or to third parties for this purpose.</p>
                <p>We may rely on third-party service providers to help operate our apps, such as analytics, advertising measurement, subscription management, crash reporting, hosting, payment processing, and app distribution platforms. Those providers may process limited technical or transaction-related data on our behalf in accordance with their own terms and privacy policies. For example, TelemetryDeck&apos;s privacy policy is available at <a href="https://telemetrydeck.com/privacy">https://telemetrydeck.com/privacy</a>, RevenueCat&apos;s privacy information is available at <a href="https://www.revenuecat.com/privacy">https://www.revenuecat.com/privacy</a>, and Meta&apos;s privacy policy is available at <a href="https://www.facebook.com/privacy/policy">https://www.facebook.com/privacy/policy</a>.</p>
                <p>We keep information only for as long as reasonably necessary for the purposes described in this policy, including maintaining the app, improving performance, complying with legal obligations, and resolving disputes.</p>
                <p>You can stop all collection by uninstalling the app. If you contact us and want us to delete information you previously sent directly, you can email us at <a href="mailto:miles.d.au@gmail.com">miles.d.au@gmail.com</a>.</p>
                <p>Our apps are not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us personal information, please contact us so we can review and delete it if appropriate.</p>
                <p>We may update this Privacy Policy from time to time. When we do, we will post the updated version on this page. Your continued use of an app after an update becomes effective means you accept the revised policy.</p>
                <p className="legal-page__effective-date">Effective date: June 13, 2026. Added Google Places (location) and on-device camera/image processing disclosures; scoped Meta/IDFA disclosures to iOS.</p>
            </section>

        </div>
    );
}

export default PrivacyPolicy;
