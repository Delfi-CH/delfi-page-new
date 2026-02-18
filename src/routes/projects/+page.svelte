<script>
    /* eslint-disable svelte/no-navigation-without-resolve */
    import {ProjectList} from "$lib/projects.js";
    import Navigation from "$lib/components/Navigation.svelte";

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
</main>
<style>
    h1, .projects {
        margin-left: 1em;
    }
    .projects {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 95%;
    }
    .projectItem {
        padding: 0.7rem;
        margin: 0.5rem;
        border: 5px solid #34c777;
        border-radius: 1.5rem;
        overflow-wrap: break-word;
        width: 30%;
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
</style>