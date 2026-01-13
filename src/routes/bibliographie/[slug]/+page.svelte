<script>
  export let data;

  const metadata = data.metadata;

  const displayFields = ["author", "title", "date", "abstract", "tags", "theme"];

  const displayValue = (v) => {
    if (v == null) return "";
    if (Array.isArray(v)) return v.join(", ");
    return v;
  };
</script>

<article class="research-note">
  <header>

    <div class="yaml-box">
      {#each displayFields as key}
        {#if metadata[key] !== undefined}
          <p><strong>{key}:</strong> {displayValue(metadata[key])}</p>
        {/if}
      {/each}
    </div>
  </header>

  <svelte:component this={data.content} />
</article>
