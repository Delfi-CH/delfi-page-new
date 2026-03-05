<script>
    import {getRandom88x31} from "$lib/88x31.js";
    import { onMount } from "svelte";
    let eightyeightXthirtyone = {filename: "88x31.gif", url: "https://cyber.dabamos.de/88x31/"};

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
            <a href={eightyeightXthirtyone.url} target="_blank"><img src={"/88x31/" + eightyeightXthirtyone.filename} alt="88x31"></a>
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