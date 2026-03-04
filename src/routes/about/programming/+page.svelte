<script>
/* eslint-disable svelte/no-navigation-without-resolve*/
import Navigation from "$lib/components/Navigation.svelte";
import Footer from "$lib/components/Footer.svelte";

import {languagesToolkitsAndUtilities} from "$lib/langs.js";
</script>

<main>
    <Navigation></Navigation>
    <h1>My programming experience</h1>
    <h2>Introduction</h2>
    <p>When I was younger, I had the desire to create my own video game. This eventually lead me to go study Computer Science after 9th grade, where I am now.</p>
    <p>At school, I am currently learning full-stack web development, primarily using ReactJS for frontends, Java SpringBoot for backends with a MariaDB Database. </p>
    <p>I also have some experience with Python (mostly for data visualisation with matplotlib) and in writing UNIX shell scripts with GNU BASH.</p>
    <p>During my free time, I have also started learning lower level languages like Rust and C by writing command-line programms with the eventual goal of writing desktop-applications.</p>
    <h2>Languages / Toolkits / Utilities</h2>
    <div class="langContainer">
    {#each languagesToolkitsAndUtilities as lang (lang)}
        <div class="langItem">
            <h3 class="langTitle">{lang.name} <img src={"/langs/"+lang.icon} alt={lang.name + " Icon"} class="langImage"></h3>
            <span>{lang.type} | </span>
            <span><a href={lang.url} target="_blank">Website</a> | </span>
            <span>Experience: {lang.skillLevel}</span>
        </div>
    {/each}
    </div>
    <span class="last"></span>
    <Footer></Footer>
</main>

<style>
    a {
        color: #34C777;
    }
    h1 {
        margin-left: 0.5em;
    }
    h2 {
        margin-left: 1em;
    }
    p, div {
        margin-left: 2.5em;
    }
    .langTitle {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .langImage {
        border-radius: 5px;
        width: 10%;
    }
    .langContainer {
        margin-left: -0.5rem;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    @media screen and (min-width: 599px) {
        .langImage {
            width: 16%;
        }
        .langContainer {
            border: 10px solid #34C777;
            border-radius: 2em;
            flex-direction: row;
            flex-wrap: wrap;
        }
        .langItem {
            width: 13%;
        }
    }

    .last {
        display: block;
        margin-bottom: 8rem;
    }
</style>