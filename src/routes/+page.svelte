<script>

import Navigation from "$lib/components/Navigation.svelte";
import Footer from "$lib/components/Footer.svelte";
</script>

<main>
    <Navigation></Navigation>
    <h1>hello, world</h1>
    <p>Welcome to Delfi's personal website. This is a showcase of my software-projects and myself as a person.</p>
    <p>Feel free to look around.</p>
    <Footer></Footer>
</main>

<style>
    h1, h2, p {
        margin-left: 0.5em;
    }
    p {
        margin-left: 1em;
        padding-left: 1em;
    }
</style>

