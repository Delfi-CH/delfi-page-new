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
    <h2>My programming experience</h2>
    <p>When I was younger, I had the desire to create my own video game. This eventually lead me to go study Computer Science after 9th grade, where I am now.</p>
    <p>At school, I am currently learning full-stack web development, primarily using ReactJS for frontends, Java SpringBoot for backends with a MariaDB Database. </p>
    <p>I also have some experience with Python (mostly for data visualisation with matplotlib) and in writing UNIX shell scripts with GNU BASH.</p>
    <p>During my free time, I have also started learning lower level languages like Rust and C by writing command-line programms with the eventual goal of writing desktop-applications.</p>
    <h2><a href={resolve("/about/setup")}>My Setup</a></h2>
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
</style>