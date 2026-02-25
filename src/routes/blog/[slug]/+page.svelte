<script>
    /* eslint-disable svelte/no-at-html-tags */
    export let data;
    import Navigation from "$lib/components/Navigation.svelte";
    import Footer from "$lib/components/Footer.svelte";

    const htmlContent = data.content;
</script>

<main>
    <Navigation />
    {@html htmlContent}
    <Footer />
</main>