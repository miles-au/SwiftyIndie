import React from 'react';

function OutfitsPrivacyPolicy() {
    return (
        <div className="legal-page legal-page--privacy container">
            <section className="legal-page__hero">
                <p className="legal-page__eyebrow">Outfits</p>
                <h1>Privacy Policy</h1>
                <p className="legal-page__intro">
                    How Outfits handles data on your device and when optional AI features send information to our cloud gateway.
                </p>
            </section>

            <section className="legal-page__content">
                <p>
                    This Privacy Policy applies to the Outfits mobile app published by Kyle Au through SwiftyIndie.
                    For general practices across other SwiftyIndie apps, see the{' '}
                    <a href="#/privacy_policy">SwiftyIndie Privacy Policy</a>.
                </p>
                <p>
                    We try to collect as little information as possible. Outfits does not require you to create an account,
                    and we do not intentionally collect information that directly identifies you—such as your name,
                    mailing address, or government-issued identifiers—unless you choose to contact us directly.
                </p>

                <p>
                    <strong>Data on your device.</strong> Your closet items, outfits, trips, profiles, packing lists, and
                    preferences are stored locally on your device. That information remains under your control unless you
                    use a feature that clearly sends data off the device (described below).
                </p>

                <p>
                    <strong>On-device image processing.</strong> When you add clothing photos, Outfits may process images
                    on your device—for example background or subject segmentation—so items look clean in your closet.
                    That on-device processing does not upload those images by itself.
                </p>

                <p>
                    <strong>Optional AI closet tagging.</strong> If you enable AI Closet Tags (or accept the related
                    consent when using Plan my outfits), Outfits may send clothing item photos from your closet to our
                    cloud gateway so an AI vision model can suggest colors, categories, and tags. Photos are resized
                    before upload and are used only to generate those suggestions and return them to the app. We do not
                    use closet photos to advertise to you, and we do not sell them.
                </p>

                <p>
                    <strong>Optional AI trip and day planning.</strong> When you use Plan my outfits or Suggest outfits,
                    Outfits may send closet <em>metadata</em> (such as item IDs, categories, colors, and tags), trip and
                    day details (including names, notes, luggage preferences, existing outfit item IDs, and weather
                    summaries), and your trip destination (name and coordinates, when available) to our cloud gateway so
                    an AI model can propose outfits. Planning requests do not include clothing photos. Results are
                    returned to the app so you can review and apply them.
                </p>

                <p>
                    <strong>AI service providers.</strong> AI features are provided through our hosted gateway (for
                    example on Google Cloud Run). Tagging may use Moondream; planning may use OpenAI. Those providers
                    process the request data needed to generate a response, in accordance with their terms and privacy
                    policies. We use the responses only to power the feature you requested. We do not sell this data.
                </p>

                <p>
                    <strong>Location and places.</strong> Outfits uses the Google Places API so you can search for trip
                    destinations. That may involve processing place search text and approximate or precise location or
                    place data. Destination coordinates associated with a trip may also be included in AI planning
                    requests when you use those features. Location and place data are used only to provide the features
                    you request. Google&apos;s privacy policy is available at{' '}
                    <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>.
                </p>

                <p>
                    <strong>Analytics.</strong> We use TelemetryDeck to collect anonymized or aggregated diagnostic and
                    usage information (for example app opens, feature usage such as AI planning funnels, app version,
                    device type, operating system version, and country or region derived from your network connection).
                    This helps us understand how Outfits is used, fix bugs, and improve the product. TelemetryDeck&apos;s
                    privacy policy is available at{' '}
                    <a href="https://telemetrydeck.com/privacy">https://telemetrydeck.com/privacy</a>.
                </p>

                <p>
                    <strong>Subscriptions.</strong> Outfits uses RevenueCat to manage in-app purchases, subscriptions, and
                    entitlements. RevenueCat may process purchase history, subscription status, entitlement information,
                    and an anonymous app user identifier. We use this to validate purchases, unlock Jetsetter features,
                    restore purchases, and provide related support. RevenueCat&apos;s privacy information is available at{' '}
                    <a href="https://www.revenuecat.com/privacy">https://www.revenuecat.com/privacy</a>.
                </p>

                <p>
                    <strong>Advertising measurement (iOS).</strong> On iOS, Outfits may integrate the Meta (Facebook) SDK
                    to measure app installs and the effectiveness of advertising on Meta technologies. We do not use
                    Apple&apos;s Identifier for Advertisers (IDFA) with Meta&apos;s services. Measurement may rely on
                    privacy-preserving techniques such as SKAdNetwork. The Android app does not include the Meta SDK.
                    Meta&apos;s privacy policy is available at{' '}
                    <a href="https://www.facebook.com/privacy/policy">https://www.facebook.com/privacy/policy</a>.
                </p>

                <p>
                    We do not use analytics data to personally identify you, and we do not sell your personal information.
                </p>

                <p>
                    If you email us for support or feedback, we will receive the information you choose to include in your
                    message, such as your email address and the contents of your request. We use that information only to
                    respond to you and manage the conversation.
                </p>

                <p>
                    We keep information only for as long as reasonably necessary for the purposes described in this
                    policy, including operating AI features you request, maintaining the app, improving performance,
                    complying with legal obligations, and resolving disputes. Request payloads processed for AI features
                    are used to generate a response for that request; we do not use them to build advertising profiles.
                </p>

                <p>
                    You can stop collection related to optional AI features by turning off AI Closet Tags in Settings and
                    by not using Plan my outfits / Suggest outfits. You can stop all collection by uninstalling the app.
                    If you contact us and want us to delete information you previously sent directly, email{' '}
                    <a href="mailto:miles.d.au@gmail.com">miles.d.au@gmail.com</a>.
                </p>

                <p>
                    Outfits is not directed to children under 13, and we do not knowingly collect personal information
                    from children under 13. If you believe a child has provided us personal information, please contact
                    us so we can review and delete it if appropriate.
                </p>

                <p>
                    We may update this Privacy Policy from time to time. When we do, we will post the updated version on
                    this page. Your continued use of Outfits after an update becomes effective means you accept the
                    revised policy.
                </p>

                <p className="legal-page__effective-date">
                    Effective date: July 31, 2026. Added optional AI closet tagging and AI trip/day planning disclosures
                    (cloud gateway, Moondream, OpenAI); clarified on-device vs uploaded images; documented destination
                    coordinates used with planning.
                </p>
            </section>
        </div>
    );
}

export default OutfitsPrivacyPolicy;
