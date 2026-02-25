<script>
    /* eslint-disable svelte/no-navigation-without-resolve */
    import {ProjectList} from "$lib/projects.js";
    import Navigation from "$lib/components/Navigation.svelte";
    import Footer from "$lib/components/Footer.svelte";

</script>
<main>
    <Navigation></Navigation>
    <h1>My Projects:</h1>
    <div class="projects">
    {#each ProjectList as project (project.name)}
        <div class="projectItem">
            <h2>{project.name} v{project.version}</h2>
            <p>{project.description}</p>
            <p>Status: {project.status}</p>
            <p><a href={project.website} target="_blank">Website</a></p>
            {#if !project.repository}
                <p>No Source Code available</p>
            {:else}
                <p><a href={project.repository} target="_blank">Repository</a></p>
            {/if}
            <p>Languages / Toolkits / Utilities</p>
            <p class="list">
                {project.toolkits.join(', ')}
            </p>
            <p>Licenses:</p>
            <p class="list">
                {project.licenses.join(', ')}
            </p>
        </div>
    {/each}
    </div>
    <span class="last"></span>
    <Footer></Footer>
</main>
<style>
    h1, .projects {
        margin-left: 1em;
    }
    .projects {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        max-width: 95%;
        margin-bottom: 10%;
    }
    .projectItem {
        padding: 0.7rem;
        margin: 0.5rem;
        border: 5px solid #34c777;
        border-radius: 1.5rem;
        overflow-wrap: break-word;
    }
    .list {
        padding: 0.2rem;
        border: 5px solid #34c777;
        background: #34c777;
        color: #1A2426;
        width: fit-content;
        border-radius: 2rem;
    }
    a {
        color: #34c777;
    }
    .last {
        display: block;
        margin-bottom: 8rem;
    }
    @media screen and (min-width: 599px) {
        .last {
            display: none;
        }
        .projects {
            flex-direction: row;
        }
        .projectItem {
            width: 29%;
        }
    }
</style>