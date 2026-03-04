<script>

import Navigation from "$lib/components/Navigation.svelte";
import Footer from "$lib/components/Footer.svelte";
import {BlogList} from "$lib/blogs.js";
import {resolve} from "$app/paths";
import {format} from "date-fns";

</script>

<main>
    <Navigation></Navigation>
    <h1>Blog</h1>
    <div class="blogContainer">
        {#each BlogList as blog (blog.url)}
            <div class="blogItem">
                <h2>{blog.name}</h2> <span>{format(blog.createdAt, "yyyy-MM-dd")}</span>
                <p>{blog.description}</p>
                <p>Last edited {format(blog.editedAt, "yyyy-MM-dd")}</p>
                <a href={resolve(blog.url)}>View</a>
            </div>
        {/each}
    </div>
    <Footer></Footer>
</main>

<style>
    a {
        color: #34c777;
    }
    h1, .blogContainer {
        margin-left: 1rem;
    }

    .blogContainer {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        margin-right: 1rem;
    }
    .blogItem  {
        width: 80%;
        margin-left: 0.2rem;
        margin-bottom: 1rem;
        border: 5px solid #34C777;
        padding: 0.7rem;
        border-radius: 1.5rem;
    }

    @media screen and (min-width: 599px) {
        .blogContainer {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .blogItem {
            width: 19%;
            margin-right: 1rem;
        }
    }

</style>