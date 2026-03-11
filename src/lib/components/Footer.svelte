<script>
    /* eslint-disable svelte/no-navigation-without-resolve */
    import {getRandom88x31} from "$lib/88x31.js";
    import { onMount } from "svelte";
    let eightyeightXthirtyone = {
        filename: "data:image/gif;base64,R0lGODlhWAAfAPcAAAAAAAgIGBgYMSEpSjE5YzE5azlCa0JKa0JKc0pKc0pSc0pSe1Jae1pahFpjhGNrjGtrjGtzjGtzlHNzlHN7lHt7nHuEnISEpYSMpYyMpYyUrZSUrZScrZyctZyltaWlvaWtva21xrW1xrW9xr29zr3GzsbG1sbO1s7O1s7O3s7W3tbW597e597n5+fn7+/v7+/v9/f39/f3/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ywAAAAAWAAfAAAI/gAFDBhIsKDBgwgTKlzIsGFCAQIJSJxIsaLFixgzatzI0eKAAAJniBxJsqTJkyhTqlzJ0qQAkANaypxJs2bKlyFt6tzJsyTOmD2DCpX5c6jRoy5hIl16tKjJFxgSEDDwwERJqFKpWkVpoaIDkgYotkDpAsJUDSdfmPhgoQGDpDlJukBAwEKMEBJFjHRxgMCFu3lTlghbNwbJFwcQkDCclu7EDSYNECaQAS5QkhQkupgRQ6KCkZkJbO5M4HPKDxItlFzh4IVKCR1idJBoIC1hFJYjSxw5cSRh3rtTxnDsWmQKCoxZkiZwMkbYAzJylyRs9YXEryKpz7BOAHvKDRI7/ogMgXwm9wcnRaQ+6RSzRAQsWExVAfp9/PkrXbyPcYFCTQ5TrXCSWQSUwJ5SJblA2AEPTMCCXAs2+CBLoSlQWUsxsDBCBQZQsJlJpBmQHEntkTTCRAkUZyKKKq6Ugmcz9SVRA1uZpB4BE6BUImcXHPABYQwkF4MFCPwoUZAyyShgSzCU8MBEepkUWpTSiRSDAwRwMAMKhGFgJZZacimRlyvFEEFoF9T0JAFvleScRC2SiKBIGUh0gkg31jZDnQTcOUOeK70AQQpvGhDnSij0VtIJEqGn45wzEGelopJypihKLziQgkgaSORBTe+ZdIFEH9wE6aWkYYfqdSmxAMGEvzPoV1p0MpEGWUkKaGZqXDNgSQBjN5Igkq/ASiTsSSq0VlJopXJFQLMzkNDdiDMwSkADKpWYKAGxqdDXrdWGF4O3BIBbkggGMNBiDBXQNgK12aX2wgoH2LWar+rueplIK1AQlgES1Mivv1MFfFIIMkqU3GQSaWnjAkdmAKtIJlzkaJVMZbzTjhp3TBSkHoe8Escil+wTyCanLBJOLwXg8sswxyzzzDTXbPPNONMMwM489+zzz0AHLfTQRBctdEAAADs=",
        url: "https://cyber.dabamos.de/88x31/"}
    ;

    onMount(() => {
        eightyeightXthirtyone = getRandom88x31();
    });
    const currentYear = new Date();
</script>

<main>
    <div class="footer">
        <p>© 2026-{currentYear.getFullYear()} Delfi-CH</p>
        <p>View the source code <a href="https://github.com/Delfi-CH/delfi-page-new" target="_blank">here</a></p>
        <div class="eightyeightXthirtyone">
            <a href={eightyeightXthirtyone.url} target="_blank"><img src={eightyeightXthirtyone.filename} alt="88x31"></a>
        </div>
    </div>
</main>

<style>
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 1rem;
        color: #1A2426;
        background: #34c777;
        border: 5px solid #34c777;
    }
    @media screen and (min-width: 599px) {
        .footer {
            flex-direction: row;
        }
    }

    .footer p {
        margin: 0;
    }

    .eightyeightXthirtyone {
        display: flex;
        align-items: center;
    }
</style>