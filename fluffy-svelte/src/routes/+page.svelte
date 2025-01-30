<script lang="ts">
    export let data;

    const articles = data.articles;
</script>

<h1>Journal de thèse</h1>

<div class="articles">
    {#each articles as a }
        <div class="article-card">
            <h2>{a.title}</h2>
            <p class="description">{a.description}</p>
            <a href={`/articles/${a.slug}`} class="read-more">Lire l'article</a>
        </div>
    {/each}
</div>

<style>
    /* Style de la page */
    h1 {
        font-family: 'Georgia', serif;
        font-size: 2.5rem;
        margin-bottom: 2rem;
        text-align: center;
        color: #333;
    }

    .articles {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        padding: 2rem;
    }

    .article-card {
        padding: 1.5rem;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
        background-color: #f9f9f9;
    }

    .article-card:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    h2 {
        font-size: 1.75rem;
        margin-bottom: 0.5rem;
        color: #333;
    }

    .date {
        font-size: 0.9rem;
        color: #777;
        margin-bottom: 1rem;
    }

    .description {
        font-size: 1rem;
        color: #555;
        margin-bottom: 1.5rem;
    }

    .read-more {
        font-size: 0.95rem;
        color: #007acc;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .read-more:hover {
        color: #005b99;
    }
</style>
