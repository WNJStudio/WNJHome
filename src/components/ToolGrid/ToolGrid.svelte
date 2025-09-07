<script>
    import ToolCard from "../ToolCard/ToolCard.svelte";
    /**
     * @type {{tools:import('../../model/ToolDefinition').ToolDefinition[]}}
     */
    const { tools } = $props();
</script>

<section class="pb-16 md:pb-24 lg:pb-32">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {#each tools as tool}
            <ToolCard {...tool} />
        {/each}
    </div>
</section>
