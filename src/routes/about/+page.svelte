<script>

    import Navigation from "$lib/components/Navigation.svelte";
    import {resolve} from "$app/paths";
    import Footer from "$lib/components/Footer.svelte";

</script>
<main>
    <Navigation></Navigation>
    <h1>About me:</h1>
    <p>Hello! I am Delfi</p>
    <p>I am in my second year of studying Computer Science and my eleventh year of School.</p>
    <h2><a href={resolve("/about/programming")}>My programming experience</a></h2>
    <h2><a href={resolve("/about/setup")}>My Setup</a></h2>
    <span class="last"></span>
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
    a {
        color: #34C777;
    }
    .last {
        display: none;
    }
    @media screen and (max-width: 600px) {
        .last {
            display: block;
            margin-bottom: 8rem;
        }
    }
</style>