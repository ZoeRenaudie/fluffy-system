<script lang="ts">

    export let data

    const articles = data.articles
    console.log(articles)
</script>


<h1>Site web</h1>

<ul>
    {#each articles as a }
        <li>
            <h2>{a.title}</h2>
            <p>{a.description}</p>
        </li>
    {/each}
</ul>

<!-- Autre piste à explorer : {@html x} dans la doc de svelte-->

<style>
    ul {
        columns: 3 25rem;
        column-gap: 1.5rem;
    }

    li {
        min-height: 10rem;
        border: solid black 1px;
        margin-top: 2rem;
        padding: 1rem;
    }
</style>