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
    {#each BlogList as blog (blog.url)}
        <h2>{blog.name}</h2><span>{format(blog.createdAt, "yyyy-MM-dd")}</span>
        <p>{blog.description}</p>
        <p>Last edited {format(blog.editedAt, "yyyy-MM-dd")}</p>
        <a href={resolve(blog.url)}>View</a>
    {/each}
    <Footer></Footer>
</main>

<style>

</style>