<script>
    import {Routes} from "$lib/routes.js";
    import {resolve} from "$app/paths";
    import { slide } from "svelte/transition";
    import burger from "$lib/assets/hamburger.png"

    let hamburgerMenuVisibility = $state(false);
    let hamburgerImage = $state(false);
    function toggleHamburgerMenuVisibility() {
        hamburgerMenuVisibility = !hamburgerMenuVisibility
        hamburgerImage = !hamburgerImage
    }

</script>

<main>
    <div class="mobile">
        <button class="hamburger" onclick={toggleHamburgerMenuVisibility}><img alt="hamburger" src={burger} width="14%" class:hamburgerImage={hamburgerImage}/></button>
        {#if hamburgerMenuVisibility}
            <ul class="hamburgerItemList" transition:slide>
                {#each Routes as route (route.name)}
                    <li class="hamburgerItem"><a class="hamburgerItemLink" href={resolve(route.href)}>{route.name}</a></li>
                {/each}
            </ul>
        {/if}
    </div>
    <div class="desktop"><ul class="navbar">
        {#each Routes as route (route.name)}
            <li class="navItem"><a class="navItemLink" href={resolve(route.href)}>{route.name}</a></li>
        {/each}
    </ul>
    </div>
</main>

<style>
    ul {
        list-style: none;
    }
    ul, li {
        margin: 0;
        padding: 0;
    }
    .mobile {
        display: block;
        height: 7.5vh;
        background: #34c777;
        margin: -0.5rem;
        color: white;
        position: relative;
    }
    .desktop {
        display: none;
    }
    .hamburger {
        cursor: pointer;
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        text-align: center;
    }
    .hamburgerItemList {
        position: absolute;
        top: 100%;
        width: 100%;
        height: fit-content;
        background: #34c777;
        color: white;
        z-index: 9999;
    }
    .hamburgerItem {
        text-align: center;
        font-size: 130%;
    }
    .hamburgerItemLink {
        margin: 0.7rem 0.5rem;
        padding: 0.3rem 0.7rem;
        color: #1A2426;
        text-decoration: none;
    }
    .hamburgerItemLink:hover {
        cursor: pointer;
        text-decoration: underline;
    }
    .hamburger img {
        transition: transform 0.3s ease;
    }

    .hamburgerImage {
        transform: rotate(90deg);
    }

    @media screen and (min-width: 599px) {
        .mobile {
            display: none;
        }
        .desktop {
            display: block;
        }
        .navbar {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
        }
        .navItem {
            width: fit-content;
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
            transition: 0.2s;
        }

        .navItemLink:hover {
            background: #131416;
            color: #34c777;
            padding: 0.6rem 1.4rem;
        }

        .github {
            width: fit-content;
            padding: 1rem 0;
            margin: 0.5rem 0;
        }

        .githubLink {
            width: fit-content;
            background: #34c777;
            border: 5px solid #34c777;
            border-radius: 2rem;
            margin: 0.7rem 0.5rem;
            padding: 0.3rem 0.7rem;
            color: #1A2426;
            font-size: 130%;
            text-decoration: none;
            transition: 0.2s;
        }

        .githubLink:hover {
            background: #131416;
            color: #34c777;
            padding: 0.6rem 1.4rem;
        }
    }
</style>