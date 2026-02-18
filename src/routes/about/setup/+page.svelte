<script>
    /* eslint-disable svelte/no-navigation-without-resolve */
    import Navigation from "$lib/components/Navigation.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import {DeviceList, OperatingSystems, Acessories} from "$lib/setup.js";

</script>
<main>
    <Navigation></Navigation>
    <h1>My Setup:</h1>
    <h2>Devices:</h2>
    <div class="deviceList">
        {#each DeviceList as device (device.name)}
            <h3>{device.name}</h3>
            <p>{device.type}, used for/as: {device.usage.join(', ')}</p>
            <p>Manufacturer: {device.manufacturer} {#if !!device.manufacturerUrl} <a href={device.manufacturerUrl} target="_blank">View official website</a> {/if}</p>
            <p>CPU: {device.processor} | GPU: {device.graphicsProcessor} | RAM: {device.memory} | Storage: {device.storage} | {device.other}</p>
        {/each}
    </div>
    <h2>Accessories</h2>
    <div class="deviceList">
        {#each Acessories as accessory (accessory.name)}
            <h3>{accessory.type}</h3>
            <p><a href={accessory.url} target="_blank">{accessory.name}</a></p>
        {/each}
    </div>
    <h2>Operating Systems:</h2>
    <p class="last">{OperatingSystems.join(', ')}</p>
    <Footer></Footer>
</main>
<style>
    h1, h2, .deviceList, .deviceList h3, p {
        margin-left: 1em;
    }
    .last {
        margin-left: 1em;
        padding-left: 1em;
        margin-bottom: 10%;
    }
    .deviceList {
        padding-left: 1em;
    }
    a {
        color: #34C777;
    }
</style>