<script>
    import {Routes} from "$lib/routes.js";
    import {resolve} from "$app/paths";
</script>

<main>
    <ul class="navbar">
        {#each Routes as route (route.name)}
            <li class="navItem"><a class="navItemLink" href={resolve(route.href)}>{route.name}</a></li>
        {/each}
    </ul>
</main>

<style>
    ul {
        list-style: none;
    }
    ul, li {
        margin: 0;
        padding: 0;
    }
    .navbar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
    .navItem {
        padding: 1rem 0;
        margin: 0.5rem 0;
    }
    .navItemLink {
        width: fit-content;
        background: #34c777;
        border: 5px solid #34c777;
        border-radius: 2rem;
        margin: 0.7rem 0.5rem;
        padding: 0.3rem 0.7rem;
        color: #1A2426;
        font-size: 130%;
        text-decoration: none;
    }
    .navItemLink:hover {
        width: fit-content;
        background: #131416;
        border-radius: 2rem;
        margin: 0.7rem 0.5rem;
        padding: 0.3rem 0.7rem;
        color: #34c777;
        font-size: 130%;
        text-decoration: none;
    }
</style>